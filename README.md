# [KakaoTalk Clone Coding](https://kakaotalk-clone-coding.vercel.app/)

React + TypeScript + Tailwind + Vite를 사용한 카카오톡 클론 프로젝트입니다.

현재 로그인, 회원가입, 채팅 목록, 채팅, 프로필 편집 기능까지 실제 API 연동을 포함하여 구현되었습니다.

---

### 🔧 Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: TailwindCSS
- **API 연동**: Axios
- **Deployment**: Vercel
- **Design**: [Figma](https://www.figma.com/design/M7PO3mlxD0uWziSdXA5UsN/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9?node-id=0-1&p=f)

---

### ✅ 구현 기능

### 로그인 페이지 (`/`)

![로그인](https://github.com/user-attachments/assets/41a1ad46-06a7-4773-8bb6-432aba783129)

- **입력 필드**: 이메일, 비밀번호
- **유효성 검사**
    - 이메일 형식 오류: 올바른 이메일 형식을 입력하세요
- **버튼 상태**: 입력값이 모두 유효해야 버튼 활성화
- **회원가입 링크**: "이메일로 회원가입" 클릭 시 `/register`로 이동
- **로그인 기능**
    - API 연동: `/api/user/login`
    - 로그인 성공 시 `/chatList`로 이동
    - 실패 시
        - 이메일 불일치: `존재하지 않는 이메일입니다.`
        - 비밀번호 불일치: `비밀번호가 일치하지 않습니다.`

---

### 회원가입 페이지 (`/register`)

![회원가입](https://github.com/user-attachments/assets/c4e1c1af-4e60-4b7e-b10d-cd09773f49b1)


- **입력 필드**: 이메일, 비밀번호, 비밀번호 확인, 이름, 휴대폰 번호
- **유효성 검사**
    - 이메일 미입력/형식 오류: `이메일 형식이 아닙니다.`
    - 비밀번호 조건 불충족: `8자 이상, 특수문자가 포함되어야 합니다.`
    - 비밀번호에 이메일 아이디 일부 포함: `비밀번호에 아이디 일부가 포함되어 있습니다.`
    - 비밀번호 불일치: `비밀번호가 일치하지 않습니다.`
    - 휴대폰 번호 조건 불충족: `휴대폰 번호 11자리를 모두 입력해주세요.`
- **회원가입 기능**
    - API 연동: `/api/user/register`
    - 성공 시 `회원가입 성공` 모달 → 로그인 페이지로 이동
    - 실패 시
        - 이메일 혹은 전화번호가 존재할 경우: `이미 존재하는 이메일 또는 전화번호입니다.` 모달

---

### 채팅 목록 페이지 (`/chatList`)

![채팅목록](https://github.com/user-attachments/assets/2490040b-1f8a-4648-8ce4-1f02cf570ff5)

- **기능**
    - 사용자 채팅 목록 불러오기:`/api/chat/list` API 연동
    - 프로필 이미지 클릭 시 `/profile`로 이동
    - `"나와 채팅하기"` 클릭 시 `/chat`으로 이동
    - 로딩 시 skeleton UI 표시

---

### 채팅 페이지 (`/chat`)

![채팅](https://github.com/user-attachments/assets/e0969f73-c417-4883-9898-f047e73479d9)

- **기능**
    - 채팅 내역 불러오기: `/api/chat` API 연동
    - 메시지 전송 시 **옵티미스틱 업데이트** 적용 → 입력 후 즉시 반영
    - `isSender` 값에 따라 메시지 좌우 정렬
        - `true`: 내 메시지 (오른쪽)
        - `false`: 상대 메시지 (왼쪽)
    - **메시지 발신자 선택 기능**: 라디오 버튼으로 나 / 상대방 선택 후 메시지 전송 가능
    - 기본 채팅 UI 구성 (스크롤 영역, 입력창 포함)
    - 로딩 중 skeleton UI 표시

---

### 프로필 페이지 (`/profile`)

![프로필](https://github.com/user-attachments/assets/c73e84ef-1994-447b-a038-9b957d9e4271)

- **프로필 정보 조회 및 편집**
    - 사용자 정보 API 연동: `/api/user/profile`
    - 프로필 이미지, 이름, 상태 메시지 표시
    - `"프로필 편집"` 클릭 시 이름/상태 메시지를 인라인 수정 가능
    - 수정 후 저장 시 `/api/user/update` 호출
    - `X` 버튼 클릭 시 이전 페이지로 이동
    - `"나와의 채팅"` 클릭 시 `/chat`으로 이동
    - 로딩 중 skeleton UI 표시

---

### 🚀 프로젝트 실행 방법

```bash
npm install
npm run dev
```
