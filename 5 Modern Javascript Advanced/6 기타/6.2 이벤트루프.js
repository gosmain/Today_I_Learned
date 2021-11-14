이벤트루프
// Task가 들어오길 기다렸다가 들어오면 이를 처리하고, 처리할 task가 없는 경우엔 잠이드는, 끊임없이 돌아가는 JS 내의 루프

JS엔진
/* (우리가 브라우저를 사용해 인터넷을 서핑할 때 돌아가는 알고리즘)

자바스크립트 엔진이 돌아가는 알고리즘:
1. 처리해야 할 Task가 있는 경우: 먼저 들어온 Task부터 순차적으로 처리함
2. 처리해야 할 Task가 없는 경우: 잠들어 있다가 새로운 Task가 추가되면 다시 1로 돌아감 

따라서, JS엔진은 대부분의 시간 동안 아무런 일도 하지 않고 쉬고 있다가 script,hanlder,event가 활성화될 때만 돌아감
*/

JS엔진Task
/* 
JS 엔진을 활성화하는 Task:
1. 외부 스크립트 <script src = "...">가 로드될 때, 이 스크립트를 실행하는 것
2. 사용자가 마우스를 움직일 때 mousemove 이벤트와 이벤트 핸들러를 실행하는 것
3. setTimeout에서 설정한 시간이 다 된 경우, 콜백 함수를 실행하는 것
*/


