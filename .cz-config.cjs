module.exports = {
  types: [
    { value: 'feat', name: 'feat:\t새로운 기능 추가' },
    { value: 'fix', name: 'fix:\t버그 수정' },
    { value: 'modify', name: 'modify:\t파일/폴더 수정/삭제/위치 변경' },
    {
      value: 'design',
      name: 'design:\tCSS등 사용자 UI/UX 디자인 변경',
    },
    {
      value: 'refactor',
      name: 'refactor:\t코드 리팩토링',
    },
    { value: 'docs', name: 'docs:\t문서 수정' },
    {
      value: 'test',
      name: 'test:\t테스트 코드 추가',
    },
    {
      value: 'chore',
      name: 'chore:\t빌드 부분 혹은 패키지 매니저 수정사항',
    },
  ],
  messages: {
    type: '커밋 변경유형을 선택해주세요.\n',
    scope: '\nDenote the SCOPE of this change (optional):',

    customScope: 'Denote the SCOPE of this change:\n',
    subject: '커밋제목을 50자이내로 명확하게 작성해주세요.\n',
    body: '본문을 작성 해주세요. 여러줄 작성시 "|" 를 사용하여 줄바꿈하세요. (첫줄|둘째줄):\n',
    breaking:
      '코드에 매우 큰 변화나 핫 픽스가 있는 경우 자세히 입력해주세요 (optional):\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: '모든 커밋메시지를 제대로 입력하셨나요? (y | n)',
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix', 'modify'],
  skipQuestions: ['scope', 'customScope', 'footer'],
  subjectLimit: 60,
};
