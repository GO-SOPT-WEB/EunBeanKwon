
<aside>
💡 React 프로젝트의 폴더구조는 어떻게 설계하는것이 좋을까???

- **Presentation Component - Container Component ↔ Custom hook ↔ Atomic를** 
비교해보자!
- 어떤 방식을 언제 택해야 좋은 것일까?
- 프론트엔드에게 디자인 패턴이란 어떤 존재일까?
</aside>

## React 프로젝트의 폴더구조는 어떻게 설계하는것이 좋을까? 🤔

### 세 가지 구조의 비교 🆚

1. **`Presentation Component - Container Component** 🪟 📃`
    
    ![Screen Shot 2023-04-21 at 17.18.49.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc61bb62-81ce-4bc3-b57f-17220e39986c/Screen_Shot_2023-04-21_at_17.18.49.png)
    
    1. 리덕스를 사용하는 프로젝트에서 자주 사용되는 구조이다.
     **Dump 컴포넌트와 Smart 컴포넌트**로도 알려져 있다.
    2. 로직을 수행하는 `Container 컴포넌트`와 markup을 통해 UI를 보여주는(데이터를 출력하는) `Presentation 컴포넌트`가 분리된 패턴.
        1. 역할별로 분리되어 각 명확한 기능/책임을 가진다.
        
        ⇒ 컴포넌트 재사용이 쉽고, 컴포넌트 간 의존도가 낮아짐!
        
    3. `Container 컴포넌트`
        1. API 호출, State 관리, 이벤트 처리 등의 작업 수행
        2. 변경된 상태를 props를 통해 Presentation 컴포넌트로 전달.
    4. `Presentation 컴포넌트`
        1. UI를 표시하는 컴포넌트
        2. 직접 상태 값을 관리 하지 않고 전달받은 prop를 출력한다.
    
    **`특징`**
    
    - 컴포넌트 간 의존도가 낮음.
    - Presntation 컴포넌트의 재사용 가능
    - 컴포넌트별로 명확한 역할을 갖고 있어 코드 구조를 이해하기 쉬움.
    - state를 propr로 여러 컴포넌트에 전달하여 상태를 공유할 수 있음
2. **`Custom hook`**
    
    ![Screen Shot 2023-04-21 at 17.18.41.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6315205f-d3ea-41c5-81b1-42797d34319a/Screen_Shot_2023-04-21_at_17.18.41.png)
    
    1. 컴포넌트에서 로직을 hooks로 분리하여 관리
    2. 로직의 재사용이 가능하다!
        1. UI는 다르지만 동일한 로직을 사용하는 두 개의 컴포넌트가 있을 경우. 기존에는 각 컴포넌트내에 로직을 선언했지만…..
        2.  로직을 별도의 파일로 분리하고, 각각의 컴포넌트에서 hooks를 호출한다면, 
        *로직 코드를 중복으로 선언할 필요가 없다.*
    
    **`특징`**
    
    - 여러 컴포넌트에서 동일한 로직 공유 가능
    - 컴포넌트의 제어가 쉽다.
    - ❗ 로직이 렌더링과 분리되어있어 동작방식에 대한 깊은 이해를 가지고 올바르게 연결해야 함!
    
3. `Atomic`
    
    ![Screen Shot 2023-04-21 at 17.18.33.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/debfa0f4-0985-4c8a-81ac-8db7d7b1b95e/Screen_Shot_2023-04-21_at_17.18.33.png)
    
    1. 컴포넌트의 재활용을 최대화하기 위함.
    2. 원자(atom)개념을 사용한 디자인 패턴.
        1. 작은 컴포넌트가 모여서 복잡한 컴포넌트가 되어가는 것을 기본 개념으로 한다.
        2. 원자(Atoms) ⇒ 분자(Molecules) ⇒ 유기체(Organisms) ⇒ 템플릿 (Template) ⇒ 페이지(Pages)까지 구분 함.
    
    **`특징`**
    
    `장점`
    
    - 컴포넌트의 재사용성 극대화
    - 계층 구조를 알아보기 쉬워 설계 변경에 빠른 대처 가능
    - 재사용될 컴포넌트에 디자인 요소가 일괄 적용되어 styles의 적용 및 변경이 쉬움
    
    `단점`
    
    - 컴포넌트의 분리를 제대로 하지 않으면 오히려 복잡도가 높아져 유지보수에 까다로움
    - 재사용 되는 범위의 다양성으로 명확히 어디에 속하는지 알기 어려움.
    - 너무 많은 porps drilling이 일어나 상태 관리에 복잡함.
        - prop의 자료형이 변경된다면 거쳐가는 모든 컴포넌트의 매개변수 자료형을 변경해주어야 함  ㅠㅜ
            
            *props drilling : props를 오로지 최하위 컴포넌트로 전달하기 위해서 여러 컴포넌트를 거쳐 가는 것
            
    
    → 애초에 개발을 위해서 만들어진 것이 아니라 디자인 시스템을 더 직관적으로 이해하기 위한 멘탈 모델..!! 
    
    컴포넌트 기반의 디자인 시스템에 대한 이해 도우미 정도로 여겨지는 듯 하다.
    
    → 아토믹 디자인을 절대적으로 취하지 않고 이를 기반으로 상황에 맞게 조합해서 사용하는 경우가 많음! (리디도)
    
    ### 어떤 방식을 언제 택해야 하는지? 🧾
    
    - **Presentation Component - Container Component**
        
        ⇒ 테스트가 많이 필요한 프로젝트에서 좋다. 로직과 뷰가 나뉘어져 있어 모의 객체를 통한 테스트의 용이성에 좋음!
        
    - **Custom hook**
        
        ⇒ 동일한 로직을 여러 컴포넌트에서 반복해서 사용할 경우 좋음! 로직 재사용이 가능하기 때문!!
        
    - **Atomic**
        
        ⇒ 재사용 가능한 요소들을 많이 만들어 복잡한 UI 디자인에서 유용하게 쓰일 수 있다!
        

### 프론트엔드에게 디자인 패턴이란 어떤 존재일까? 🏛

- `가독성`, `유지보수성`, `재사용성`을 고려했을 때 디자인 패턴을 적용하면 훨씬 깔끔한 코드와 폴더구조로 코드 작성이 가능하다.

- 규칙성을 가지고 개발하면 훨씬 생산적이고, 서로의 코드를 이해하는 것에 있어서도 큰 도움이 됨.

- 또한 유지보수가 쉬운 코드는 코드를 확장하고 유지보수 가능하게 하는 데에 도움이 되어 프로젝트를 계속해서 개발시켜 나갈 때에도 중요한 역할을 함!

- 또한 타 파트와 협업할 일이 많은 프론트엔드에서는 이렇게 구조화된 작업으로 요구 사항에 따른 수정도 덜 복잡하게 할 수 있음

## 🔗 참고자료

- **[1-2. Presentational 컴포넌트와 Container 컴포넌트 - GitBook](https://redux.vlpt.us/1-2-presentational-and-container-components.html)**
- **[React.js - presentational & container 디자인 패턴](https://kyounghwan01.github.io/blog/React/container-presenter-dessign-pattern/)**
- **[React 디자인 패턴 - 넥스트리](https://www.nextree.io/react-design-pattern/)**
- **[Atomic Design Pattern의 Best Practice 여정기 - 요즘IT - 위시켓](https://yozm.wishket.com/magazine/detail/1531/)**
- **[[React] React 디자인 패턴 - 햣 블로그](https://woong-jae.com/react/220609-react-design-pattern)**
- [어떤 React 디자인 패턴이 적절한 것일까 ?](https://youngmin.hashnode.dev/react)
- ****[리액트 React 로 만든 웹사이트, 풀스택 개발 장단점 | Manta 2부 | 리디 RIDI dev.](https://www.youtube.com/watch?v=exf4enLbVm4)****
- **[클린한 프론트엔드 아키텍처를 향한 첫 걸음 | Blog - kimcoder](https://www.kimcoder.io/blog/clean-frontend-architecture)**
