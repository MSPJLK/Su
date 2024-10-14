//example day-21 학습과제 연습

//  1) 철수의 나이는 몇살인가요?(나이만 조회해 주세요.)

//  query{
//    fetchProfile(name:"철수"){
//      age
//    }
//  }

//  =>결과
//  {
//    "data": {
//      "fetchProfile": {
//        "age": 12
//      }
//    }
//  }

//  2) 영희의 학교는 어디인가요?(학교만 조회해 주세요.)


//  query{
//    fetchProfile(name:"영희"){
//      school
//    }
//  }

//  => 결과
//  {
//    "data": {
//      "fetchProfile": {
//        "school": "영희초등학교"
//      }
//    }
//  }

//  3) 3번 게시글의 내용과 작성일이 무엇인가요?(내용과 작성일만 조회해 주세요.)
//  3번 게시글이 없어서 2번게시글 확인함

//  query {fetchBoard(number:2)
//    {
//      contents
//      createdAt
//    }
//  }

//  => 결과
//  {
//    "data": {
//      "fetchBoard": {
//        "contents": "반갑습니다",
//        "createdAt": "2024-09-11T08:12:29.543Z"
//      }
//    }
//  }

//  4) 본인의 이름으로 프로필을 작성해 보세요.

//  mutation{
//    createProfile (
//      name: "곽자향",
//    	age:20000,
//    	school:"잡코디초등학교") {
//      _id
//      number
//      message
//    }
//  }

//  => 결과
//  {
//    "data": {
//      "createProfile": {
//        "_id": null,
//        "number": null,
//        "message": "프로필이 정상적으로 등록되었습니다."
//      }
//    }
//  }

//  => 프로필 등록됐는지 확인
//  query{
//    fetchProfile(name:"곽지향"){
//      age
//      school
//    }
//  }

//  5) 본인의 이름으로 게시글을 작성해 보세요.
  
//  mutation{
//    createBoard(
//      writer:"곽자향",
//    	title:"잡코디선생님 컨설팅은 어떠한가"
//  		contents:"좋은 내용이었나요?") {
//      _id
//      number
//      message
//    }
//  }

//  => 결과

//  {
//    "data": {
//      "createBoard": {
//        "_id": null,
//        "number": 697,
//        "message": "게시물이 정상적으로 등록되었습니다."
//      }
//    }
//  }

//  6) 자신의 프로필을 조회해 보세요.

//  query{
//    fetchProfile(name:"곽자향"){
//      number
//      name
//      age
//      school
//    }
//  }

//  =>결과
//  {
//    "data": {
//      "fetchProfile": {
//        "number": 98,
//        "name": "곽자향",
//        "age": 20000,
//        "school": "잡코디초등학교"
//      }
//    }
//  }

//  7) 자신의 게시글을 조회해 보세요.

//  query{
//    fetchBoard(number:697){
//      number
//      writer
//      title
//      contents
//      like
//      createdAt
//      __typename
//    }
//  }

//  => 결과

//  {
//    "data": {
//      "fetchBoard": {
//        "number": 697,
//        "writer": "곽자향",
//        "title": "잡코디선생님 컨설팅은 어떠한가",
//        "contents": "좋은 내용이었나요?",
//        "like": 0,
//        "createdAt": "2024-10-13T17:06:37.599Z",
//        "__typename": "BoardReturn"
//      }
//    }
//  }

//  8) 본인의 프로필에서, 학교를 자신이 졸업한 초등학교로 바꿔보세요.

//  mutation{
//    updateProfile(
//      name:"곽자향"
//      school:"대마왕초등학교"
    
//    ) {
//      _id
//      number
//      message
//    }
//  }

//  => 결과
//  {
//    "data": {
//      "updateProfile": {
//        "_id": null,
//        "number": null,
//        "message": "프로필이 정상적으로 수정되었습니다."
//      }
//    }
//  }

//  수정된 프로필 다시 조회

//  query{
//    fetchProfile(name:"곽자향") {
//      number
//      name
//      age
//      school
//    }
//  }

//  =>결과
//  {
//    "data": {
//      "fetchProfile": {
//        "number": 98,
//        "name": "곽자향",
//        "age": 20000,
//        "school": "대마왕초등학교"
//      }
//    }
//  }

//  9) 본인의 게시글에서, 제목과 내용을 바꿔보세요.

//  mutation{
//    updateBoard(
//      number:697
//    	title: "역량있는 상담가인가"
//    	contents: "그것이 궁금하다") {
//      _id
//      number
//      message
//    }
//  }

//  => 결과
//  {
//    "data": {
//      "updateBoard": {
//        "_id": null,
//        "number": 697,
//        "message": "게시물이 정상적으로 수정되었습니다."
//      }
//    }
//  }

//  수정한 게시물 내용 조회

//  query{
//    fetchBoard(number:697){
//      number
//      writer
//      title
//      contents
//      like
//      createdAt
//    }
//  }

//  =>조회내용

//  {
//    "data": {
//      "fetchBoard": {
//        "number": 697,
//        "writer": "곽자향",
//        "title": "역량있는 상담가인가",
//        "contents": "그것이 궁금하다",
//        "like": 0,
//        "createdAt": "2024-10-13T17:06:37.599Z"
//      }
//    }
//  }

//  10) 자신이 좋아하는 만화 주인공으로 프로필을 작성해 보세요. 

//  mutation{
//    createProfile(
//      name:"짱구동생짱아"
//      age:0
//      school:"미취학아동"
//    ){
//      _id
//      number
//      message
//    }
//  }

//  =>결과

//  {
//    "data": {
//      "createProfile": {
//        "_id": null,
//        "number": null,
//        "message": "프로필이 정상적으로 등록되었습니다."
//      }
//    }
//  }

//  작성한 캐릭터 프로필 내용 조회해보기

//  query{
//    fetchProfile(name:"짱구동생짱아"){
//      number
//      name
//      age
//      school
//    }
//  }

//  => 조회 결과

//  {
//    "data": {
//      "fetchProfile": {
//        "number": 99,
//        "name": "짱구동생짱아",
//        "age": 0,
//        "school": "미취학아동"
//      }
//    }
//  }
  

//  11) 위 10번에서 작성한 프로필을 삭제해 보세요.

//  mutation{
//    deleteProfile(name:"짱구동생짱아"){
//      _id
//      number
//      message
//    }
//  }

//  => 결과

//  {
//    "data": {
//      "deleteProfile": {
//        "_id": null,
//        "number": null,
//        "message": "프로필이 정상적으로 삭제되었습니다."
//      }
//    }
//  }

//  삭제되었는지 다시 프로필 조회

//  query{
//    fetchProfile(name:"짱구동생짱아"){
//      number
//      name
//      age
//      school
//    }
//  }

//  => 결과 조회

//  {
//    "data": {
//      "fetchProfile": null
//    }
//  }

//  12) 상품을 하나 만들어 보세요.

//  mutation{
//    createProduct(
//      seller:"나라닷컴"
//    	createProductInput:{
//        name:"블루투스 무선키보드"
//        detail: "가벼운 접이식 키보드입니다."
//        price: 20000
//      }
//    ) {
//      _id
//      number
//      message
//    }
//  }

//  => 결과

//  {
//    "data": {
//      "createProduct": {
//        "_id": "4e3d51ab-fcd0-4b7c-b0c2-2aa8b85a0fba",
//        "number": null,
//        "message": "상품이 정상적으로 등록되었습니다."
//      }
//    }
//  }

//  잘 등록되었는지 상품 확인해보기

//  query{
//    fetchProduct(productId:"4e3d51ab-fcd0-4b7c-b0c2-2aa8b85a0fba"){
//      seller
//      name
//      detail
//      price
//      createdAt
//    }
//  }

//  =>조회 결과

//  {
//    "data": {
//      "fetchProduct": {
//        "seller": "나라닷컴",
//        "name": "블루투스 무선키보드",
//        "detail": "가벼운 접이식 키보드입니다.",
//        "price": 20000,
//        "createdAt": "2024-10-13T17:47:52.980Z"
//      }
//    }
//  }


//  13) 위 12번에서 만들었던 상품의 가격을 500원 인상해 보세요.

//  mutation{
//    updateProduct(
//      productId:"4e3d51ab-fcd0-4b7c-b0c2-2aa8b85a0fba"
//      updateProductInput:{
//        price:20500
//      }
//    ) {
//      _id
//      number
//      message
//    }
//  }

//  =>결과
//  {
//    "data": {
//      "updateProduct": {
//        "_id": "4e3d51ab-fcd0-4b7c-b0c2-2aa8b85a0fba",
//        "number": null,
//        "message": "상품이 정상적으로 수정되었습니다."
//      }
//    }
//  }

//  14) 위에서 만든 상품을 조회하되, 가격만 조회해 보세요.

//  query{
//    fetchProduct(productId:"4e3d51ab-fcd0-4b7c-b0c2-2aa8b85a0fba"){
//      price
//    }
//  }

//  =>결과 조회  
  
//  {
//    "data": {
//      "fetchProduct": {
//        "price": 20500
//      }
//    }
//  }


//  15) 조회했던 상품을 삭제해 보세요.

//  mutation{
//    deleteProduct(productId:"4e3d51ab-fcd0-4b7c-b0c2-2aa8b85a0fba"){
//      _id
//      number
//      message
//    }
//  }

//  =>결과

//  {
//    "data": {
//      "deleteProduct": {
//        "_id": "4e3d51ab-fcd0-4b7c-b0c2-2aa8b85a0fba",
//        "number": null,
//        "message": "상품이 정상적으로 삭제되었습니다."
//      }
//    }
//  }


//  16) 삭제한 상품이 정말로 삭제되었는지 다시 한번 조회해 보세요.

//  query{
//    fetchProduct(productId:"4e3d51ab-fcd0-4b7c-b0c2-2aa8b85a0fba"){
//      _id
//    }
//  }

//  =>조회 결과

//  {
//    "data": {
//      "fetchProduct": null
//    }
//  }



//  17) 게시물 목록 중, 2페이지를 조회해 보세요.

//  query{
//    fetchBoards(page:2){
//      number
//      writer
//      title
//      contents
//      like
//      createdAt
//    }
//  }

//  18) 게시물 목록을 조회할 때, page를 입력하지 않으면, 어떤 결과가 발생하나요?

//  query {
//    fetchBoards (page:1){
//      number
//      writer
//      title
//      contents
//      like
//      createdAt
//    }
//  }

//  답  : 확인결과 첫번째 페이지가 나타남

//  19) 프로필이 전체 몇 개가 있는지 확인해 보세요.

//  query {
//    fetchProfilesCount
//  }

//  => 결과
//  {
//    "data": {
//      "fetchProfilesCount": 81
//    }
//  }

//  20) 게시물은 몇 개가 있나요?
//   query{
//     fetchBoardsCount
//  }

//  => 결과
//  {
//    "data": {
//      "fetchBoardsCount": 282
//    }
//  }



