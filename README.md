# 그려줘! 로고

## 💎프로젝트 기획 배경

동네에 있는 작은 산들을 다니다 보면 배드민턴 동호회 현수막을 자주 발견합니다. 보통 신입 회원을 모집하는 내용인데, 대부분 동호회 로고가 없습니다. 아무래도 로고 제작에 비용이 들어가는 문제가 있기 때문이라고 생각했습니다. 이런 동호회들을 위해 쉽게 로고를 제작할 수 있는 서비스를 고안하게 되었습니다.

---

## 📒목차

1. [프로젝트 일정](https://www.notion.so/b3036ccea14f4ca197fd812099d1ae40?pvs=21)
2. [사용 기술 스택](https://www.notion.so/b3036ccea14f4ca197fd812099d1ae40?pvs=21)
3. [주요 기능 소개](https://www.notion.so/b3036ccea14f4ca197fd812099d1ae40?pvs=21)
4. [트러블 슈팅](https://www.notion.so/b3036ccea14f4ca197fd812099d1ae40?pvs=21)

---

## 🗓️프로젝트 일정

- 2023.10.31 ~ 2023.11 ( 🏃🏻기능을 개선하면서 진행 중입니다.)

---

## 📚사용 기술 스택

BackEnd

- Node.js
- Express.js
- MongoDB

FrontEnd

- React
- Vite
- Tailwind CSS

---

## 🔑주요 기능 소개

### 1. 홈 화면

![홈화면](https://github.com/minyun02/logo-project/assets/69966611/41a1f31a-2ff2-4bb2-be60-4abe540a635d)

- 로그인 하지 않은 사용자가 홈 화면에 접속하면, 간단한 서비스 설명과 함께 "로그인 후 서비스를 이용하세요"라는 안내 문구가 표시됩니다. 이렇게 하여 사용자는 서비스의 핵심 기능을 미리 알 수 있고, 로그인 후에 해당 기능을 활용할 수 있게끔 안내됩니다.

### 2. 네이버 로그인

![네이버로그인](https://github.com/minyun02/logo-project/assets/69966611/ee0cd7bd-fb73-429d-91e2-d02fa8a9eeaf)

- 서비스 이용을 위해 네이버를 통한 로그인 기능을 제공합니다. 사용자의 이름과 성별 정보를 필수로 수집합니다.
- 네이버 로그인으로 전달받은 토큰을 사용하여 사용자 정보를 조회합니다. 그 후, 데이터베이스 조회를 통해 사용자가 이미 존재하는지 여부를 확인합니다. 이미 등록된 회원인 경우, 해당 회원의 정보를 활용하여 로그인용 쿠키를 생성하고 로그인 과정을 진행합니다. 신규 회원인 경우, 회원 등록 절차를 거쳐 회원 정보를 저장하고, 이후에 쿠키를 생성하여 로그인을 완료합니다.

### 3. 홈 화면 (로그인 후)

![홈화면로그인후1](https://github.com/minyun02/logo-project/assets/69966611/9dc53532-8812-421d-8f9e-a29279c928d9)

- 인가를 받은 사용자가 처음 접하는 홈 화면입니다. 다른 회원들이 업로드한 로고들을 그리드 형식으로 확인할 수 있습니다. 또한, 팀 이름과 운동 종목을 기반으로 로고를 검색하는 기능도 제공됩니다.

![홈화면로그인후2](https://github.com/minyun02/logo-project/assets/69966611/8141b7ad-ca23-4d0b-8d53-d307c83f7971)

- 검색 기능은 로고 정보를 포함하는 배열에서 검색어를 기반으로 필터링 작업을 수행합니다. 이렇게 검색어와 일치하는 정보를 가진 배열을 추출한 후, 해당 정보를 화면에 표시하는 방식으로 동작합니다.

### 4. 만들기

![만들기1](https://github.com/minyun02/logo-project/assets/69966611/aa195f3a-934f-42a0-b6a6-9590c03b8cf0)

- 로고 만들기 기능은 OpenAI의 ChatGPT와 DALL·E 2 API를 활용합니다. 사용자는 로고를 만들기 위해 필요한 정보를 입력한 후 "로고 만들기" 버튼을 클릭합니다.

![만들기2](https://github.com/minyun02/logo-project/assets/69966611/a184cd0d-98f2-4fe2-957d-46d04b877a51)

- 이때, 입력된 정보는 ChatGPT에게 전송됩니다. ChatGPT는 이 정보를 기반으로 DALL·E 2에게 전달될 prompt를 생성합니다. DALL·E 2는 받은 prompt를 활용하여 이미지를 생성하고 사용자에게 제공합니다.
- ChatGPT를 거쳐 prompt를 만드는 이유는 DALL·E 2에게 더 최적화된 prompt를 생성하여 로고 이미지 품질을 향상시키기 위해서입니다.

![만들기3](https://github.com/minyun02/logo-project/assets/69966611/58f119d8-4ac7-4dcc-915f-77575525ce15)

- DALL·E 2 API를 통해 로고 이미지 생성이 완료되면, 위와 같이 화면에 이미지를 표시합니다. 그리고 "로고 저장하기" 버튼을 노출시켜 사용자가 만들어진 로고를 데이터베이스에 저장할 수 있게 합니다.
- 로고 이미지는 Cloudinary에 저장되고, 해당 이미지의 URL을 반환합니다. 이후 반환받은 이미지 URL은 사용자 정보와 함께 데이터베이스에 저장됩니다.

### 5. 내 로고

![내로고](https://github.com/minyun02/logo-project/assets/69966611/79805721-2387-4b74-9059-22e2ba7f7c37)

- 로고 페이지에서는 사용자가 생성한 로고 이미지들을 표시합니다. 사용자는 해당 페이지에서 로고 이미지를 다운로드할 수 있습니다.

---

## 🔍트러블 슈팅

<aside>
💡 프로젝트 개발 중 마주한 에러나 개선하고 싶은 부분을 정리하고 블로그에 게시합니다.

</aside>

- [useContext로 로그인 여부 확인하기](https://doingsomething.tistory.com/110)

---
