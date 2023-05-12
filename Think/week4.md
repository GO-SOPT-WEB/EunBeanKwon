    
# React에서 **Props Drilling을 해결하는 전략**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/310947ed-ae1c-499c-828e-d8e0ae9af628Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c6a25cbb-3470-42f4-ad9f-c4db31f7565cUntitled.png)

# Props Drilling 🔃

- React 컴포넌트 트리의 일부로 데이터를 전달하기 위한 프로세스
    - props를 통해 데이터를 전달하는 과정에서 자식 컴포넌트에게 전달하기 위해서 
    중간 컴포넌트(이 props를 사용하지 않음에도!!)에게도 props를 전달해야하는 과정
    
    ⇒ 이 경우 거쳐지나가는 모든 컴포넌트들이 rerendering 됨 🤔
    
    ## 장점 👍🏻
    
    - 간단하고 빠른 컴포넌트 간 데이터 전달
    
    (규모가 작은 어플리케이션의 경우)
    
    - 코드 실행 없이도 어떤 데이터가 어디서 쓰이는 지 파악하기 쉬움
    - 값이 어디서 사용되는지 명시적으로 파악 가능

## 문제 🥲

- 어플리케이션의 규모가 커질 수록 코드 복잡도 증가
- 많은 props를 전달하다가 컴포넌트 분리 과정에서 불필요한 props가 남거나 전달 됨
- props의 이름 혹은 자료형이 변경되는 경우 데이터가 어디에서 기인했는지를 확인하기 어려움
    
    ⇒ 리팩토링 할 때 정말 힘들다 ! !
    

# Props Drilling 문제를 해결하려면? 🥸

## 1. props 유연하게 작성하기

- 예시
    
    ```jsx
    const FileControls = ({ canWrite, canCopy, canDelete, file }) => {
      return (
        <div>
          <span>{file.title}</span>
          <button>View</button>
          {canWrite && <button>Edit</button>}
          {canCopy && <button>Copy</button>}
          {canDelete && <button>Delete</button>}
        </div>
      );
    };
    ```
    
    - 당장은 문제 없이 작동되지만 버튼이 늘어날 수록 관리가 복잡해진다!!
    - 사용자가 사용할 수 있는 array 액션을 제공해서 해결할 수 있다.
    
    ```jsx
    const FileControls = ({ availableActions, file }) => {
      return (
        <div>
          <span>{file.title}</span>
          {availableActions.map((action) => (
            <button>{action.title}</button>
          ))}
        </div>
      );
    };
    ```
    
    - 이 방법을 사용하면 props의 영향을 주지 않고 버튼을 추가, 삭제, 수정할 수 있다!
    - 자식 컴포넌트는 이런 작업에 대해 알고 있지 않아도 전달 받은 작업을 렌더링하기만 하면 됨 👍

## 2. 전역 상태 관리 라이브러리 사용하기 🌐

🔗 : ****[리액트에서 상태관리가 필요한 이유](https://velog.io/@eunbeann%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC%EA%B0%80-%ED%95%84%EC%9A%94%D%95%9C-%EC%9D%B4%EC%9C%A0)****

### 🤎 Context API

- React 컴포넌트 트리 안에서 전역 상태를 공유할 수 있도록 만들어진 방법
- 종속성 주입 툴로 이미 존재하는 상태를 다른 컴포넌트들과 쉽게 공유할 수 있게 함

### 🤎 Redux

- 전역 상태관리 도구
    - Single Source of truth
        - 오직 하나인 데이터 공간 Store : 같은 데이터는 언제나 동일하게 가지고 옴
    - State is read-only
        - 액션 객체를 통해서만 상태 변경 가능
    - Changes are made with pure functions
        - 변경은 순수 함수로만 가능!

### 🤎 Recoil

- 페이스북에서 만든 상태 관리 라이브러리
- atoms(공유 상태) 에서 selectors(순수 함수)를 거쳐 React 컴포넌트로 내려가는 data-flow graph를 만들 수 있음

## 🤎 MobX

- Typescript 기반으로 만들어진 상태 관리 라이브러리
- 번잡한 보일러 플레이트 코드를 데코레이터를 제공해 깔끔하게 해결한다
- 객체지향 느낌이 강한 라이브러리

## 🤎 SWR

- HTTP의 캐시 제어 확장에 의해 동작한다.
- 캐시로부터 데이터를 반환하고 fetch 요청을 보낸 후, 최신 데이터를 업데이트 함
- 백그래운드에서 캐시를 재검증하는 동안에 기존에 캐시된 데이터를 사용하게 한다!

⇒ Fetching에 특화된 Hook

## 🤎 React Query

- 비동기 데이터를 쉽게 관리, 캐시 및 동기화할 수 있는 React용 라이브러리
- 사용자 인터랙션에 따른 데이터의 fetching, caching, updating과 컴포넌트 트리 변경사항에 대한 과정을 단순화한다!
- 실시간 업데이트, 페이지네이션, 오류 처리 등과 같은 유용한 기능을 제공한다.
- 클라이언트 데이터보다 서버 데이터에 대한 관리가 더 많을 때 적합하다.

*보일러 플레이트 : 최소한의 변경으로 여러곳에서 재사용되며, 반복적으로 비슷한 형태를 띄는 코드를 말한다.

## **그렇다면 나는 합동세미나, 솝커톤, 웹잼에서 어떤걸 시도해보고 싶은가?
👉 또 그이유는 무엇인가?!**

## Redux

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5c6e9757-e827-4052-9a0d-81cf14c907e6Untitled.png)

- 성능적으로 개선 된 많은 상태 관리 라이브러리가 많이 있지만 ! 
Redux를 사용해보고 싶다!! 
가장 대중적인 상태 관리 라이브러리라는 게 1순위 이유 ✅
- 대중적인 라이브러리를 택하고 싶은 이유는
    1. 이미 릴리즈 된 프로젝트 중간에 들어가는 일이 생길 때 환경에 빠르게 적응하기 위함
        1. 물론 이미 릴리즈된 프로젝트가 모두 리덕스를 쓰는 건 당연히! 아니겠지만 리덕스가 대중적이라면 쓰는프로젝트가 많지 않을까?! 하는 생각 
    2. 참고할 수 있는 자료의 방대함
        1. 많은 사람이 쓴다는 건 말 그대로 고민을 해 본 사람의 절대적인 수도 많다는 것! 여러 사람들이 미리고민해본 지점 혹은 학습한 것들을 업로드 한 것을 참고해서 학습할 때의 러닝 커브를 조금이라도 낮출 수있을 것이라는 기대감 

🔗 : **[Props Drilling - 프로그래밍 공부하기](https://study-ihl.tistory.com/166)**

🔗 : **[A better way of solving prop drilling in React apps](https://blog.logrocket.comsolving-prop-drilling-react-apps/)**

🔗 : ****[Prop Drilling in React: How to Avoid It](https://isamatov.com/react-avoid-prop-drilling/)****

🔗: ****[[React] 상태관리와 전역상태관리 라이브러리](https://velog.io/@hyerin0930React-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC%EC%99%80-%EC%A0%84%EC%97%AD%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC)****

🔗 : **[React에서 Mobx 경험기 (Redux와 비교기)](https://techblog.woowahan.com/2599/)**

🔗 : **[[ React-Query ] 총 정리 - velog](https://velog.io/@94applekoo/React-Query-%EC%B4%9D-%EC%A0%95%EB%A6%AC**

🔗 : ****[[React] SWR tutorial](https://velog.io/@soryeongk/ReactSWRTutorial)****