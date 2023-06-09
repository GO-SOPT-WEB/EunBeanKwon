
# 리액트에서 상태관리가 필요한 이유 👀

### 상태(state)란? 🤔

- 리액트에서 이벤트에 의해 변경되는 `동적인 값` 🏃‍♀️
- 웹 애플리케이션을 렌더(render)하는데 있어서 영향을 미칠 수 있는 값
- 어떤 시스템이나 프로그램의 현재 상황이나 정보를 나타내는 것 ⇒ 값이 변하면 상태가 변하는 값
    
    `상태의 종류`
    
    1. **전역상태 (Global State)**
        1. 프로젝트 전체에 영향을 끼치는 상태
        2. Props Drilling 방식을 통해서 부모에서 자식으로 데이터를 전달함.
    2. **컴포넌트 간 상태 (Cross Component State)**
        1. 여러 가지 컴포넌트에서 관리되는 상태
        2. 프로젝트 군데군데에서 쓰이는 모달
        3. Props Drilling을 필요로 함.
    3. **지역상태 (Local State)**
        1. 특정 컴포넌트 안에서만 관리되는 상태
        2. 다른 컴포넌트들과 데이터를 공유하지 않는다.
        3. `input` , `selectbox` 등 사용자의 입력값을 받는 경우

### 상태 관리를 왜 해야할까? 🤔

> 각 컴포넌트 간의 직접적인 데이터 전달이 어려우므로 데이터를 부모 컴포넌트에 보내고 다시 해당 상태 데이터를 필요한 컴포넌트로 전달해야 함. 

⇒ 이렇게 Props Drilling이 많아질 경우 Prop의 출처를 찾기 어려움 ㅠ.ㅠ
> 
1. 복잡한 시스템을 다룰 때는 필수적으로 필요함! 상태 관리 없이 진행 된다면
사용자가 애플리케이션 내에서 수행하는 작업의 상태를 추적하는 것이 매우 어려움
2. 프로그램이 어떻게 구동 될지 예측 가능하고, 코드를 추후에 유지하고 보수하는 것에 있어서 긍정적인 효과를 줌.
상태 관리를 하면 애플리케이션의 상태를 확인하는 것이 쉬워 문제 발생시 원인 파악에 공수가 적게 듦
3. 여러 컴포넌트 간의 데이터 공유를 용이하게 함!
중복 코드를 방지하고, 코드의 재사용성 증가
4. 성능 최적화에도 도움이 됨. ⇒ 필요한 상태만 업데이트해 불필요한 렌더링, 네트워크 요청을 최소화 함.

# 관리해야하는 상태란?🥸

- `사용자 인증 정보`
    - 사용자의 로그인 여부를 따라가며 사용 되는 정보
    - 앱 내에서 수행하는 작업에 차이가 발생할 수 있어 중요함.
- `앱 설정 정보`
    - 앱 전체에서 사용되는 변수들을 관리
        - 사용하는 API
        - 표시되어야하는 언어
        - 라우팅 정보 등
- `앱 상태 정보`
    - 앱이 현재 작동하고 있는지, 로딩 중인지, 오류가 발생했는지 등을 저장
    - 앱의 UI 상태 변경과 사용자에게 적절한 메시지를 제공하는 데 사용 됨
- `서버 발 데이터`
    - 앱에서 사용하는 서버 발 데이터 저장
    - 렌더링에 쓰이고, 사용자의 요청에 따라 자주 업데이트 됨
- `컴포넌트 상태 정보`
    - 컴포넌트에서 관리하는 로컬 상태 정보
    - 다른 컴포넌트에서는 접근할 수 있는 컴포넌트에서만 사용되는 정보들
    - [ex] 토글 상태 ,

# 상태 관리 라이브러리들⛓

- `useState`
    - state를 관리하여 DOM을 업데이트하는 react hook
- `Context API`
    - React 컴포넌트 트리 안에서 전역 상태를 공유할 수 있도록 만들어진 방법
    - 전역적인 상태 관리를 위한 방법
        - 프로바이더와 컨슈머를 활용해
        - 앱 전체의 관점 / 컴포넌트 관점에서 상태를 관리 할 수 있게 함
    - but, 불필요한 리렌더가 일어나기도 함.
    - 
- `리덕스 (Redux)`
    - 컴포넌트 간 상태 전달을 위한 효율적인 방법!
    - 어플리케이션 전체에 대한 중앙 저장소 역할을 함
    - 중앙 상태 관리 방식으로 동작 
    ⇒ Store에 상태를 저장해 앱 내 어디서든지 접근할 수 있게 .
    - 단 하나만 존재하는 Store가 전역 상태를 저장
    - Action을 통해서 Store에 대한 행동을 정의하여 상태 변경에 대한 이벤트 트리거의 역할
    - Reducer를 통해서만 전역 상태를 변경하고 업데이트할 수 있으며 어떤 액션이 들어오는지에 대한 이벤트를 처리하는 이벤트 리스너
- `React Query`
    - 서버와 클라이언트 간 비동기 작업을 쉽게 다룰 수 있게 도와주는 라이브러리로 서버 상태를 관리하는 라이브러리
    - 비동기를 통해 서버 상태를 가져오고 관리하기 쉽게 도움
    - 서버 상태는 직접 관리할 수 없어서 특별히 신경서야 함

## 상태관리를 어떻게 해야할까? 🤔

- 위에서 언급한 상태 관리 라이브러리들을 활용한다.

# React에서 렌더링을 효과적으로 관리하는 방법

## 렌더링(Rendering)

- 코드로 정의 된 내용이 실제 브라우저 화면에 그려지는 과정
- 리액트는 컴포넌트의 props와 state를 기반을 만든다.

## 렌더링 최적화

1. State 선언의 위치
    1. 특정 state가 변경 되면 선언된 컴포넌트와 그 하위 컴포넌트를 전부 리렌더링 
    2. state의 위치를 잘짜면 리렌더링 횟수를 줄일 수 있음
    3. 해당 state를 사용하는 컴포넌트들을 잘 구분해 놓은 뒤 그 컴포넌트들 중 가장 최상위 컴포넌트에 선언
    4. state를 사용하는 최상위 컴포넌트보다 더 상위라면 사용하지 않는 컴포넌트들이 불필요한 리렌더링
2. 객체 타입의 state는 분할하여 선언하기
    1. 객체가 크고 복잡할 수 록 분할할 수 있는 만큼 최대한 분할하기
    2. 해당 state에서 일부의 프로퍼티만 사용하는 하위 컴포넌트가 있다면 
    ⇒ 해당 프로퍼티가 변경될 땐에만 리렌더링 되는 것이 합리적임!
3. React.memo로 컴포넌트 메모이제이션 하기
    1. 컴포넌트를 wrapping해 props를 비교해 리렌더링을 막는 메모이제이션 기법 제공 함수
    2. Hook이 아니므로 클래스형 컴포넌트에서 사용 가능
    3. 콜백 함수로 메모이제이션 적용 결정
4. 컴포넌트 매핑시에는 key값으로 index쓰면 안됨.
    1. 배열 중간에 요소 삽입 시 중간 이후 요소들은 전부 인덱스가 바뀌면서 key값이 변경되어 리마운트 발생
5. useMemo
    1. 종속 변수들이 바뀌지 않으면 함수를 다시 호출하지 않고 이전에 반환한 참조 값을 재사용
    ⇒ 함수 호출 시간도 절약하고 같은 값을 props로 받는 하위 컴포넌트의 리렌더링 방지 가능
6. useCallback
    1. 종속 변수들이 바뀌지 않으면 함수 재생성 없이 기존 참조 변수를 그대로 props로 전달해 리렌더링을 방지할 수 있음.

⇒ state/props의 변경을 최소화하고,

불필요한 하위 컴포넌트 리렌더링을 최소화 하는 것 두 가지 방향으로 진행!!