// 이 파일은 노트정리용 파일입니다.
import React, { useState } from 'react'

const useInput  = (initialValue: string ="") => {
  const [value, setValue] = useState(initialValue)
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  // as const가 왜 필요???=> 타입스크립트 강의에서 read-only타입.
  // as const 또는 readonly로 직접 선언.
  // 읽기전용이 되어버리니까 그 밸류 자체가 타입이 되면서, 타입이 변경되지 않게 된다.
  // 그럼 그걸 왜 해줘야 하는데???
  // as const가 없다고 가정하자. 우리는 useInput에 titleHandler를 돌려서 그냥 value(여기서는 title)을 바깥(Input.tsx)으로 내뱉는다.
  // 그런데 이 value가 string이라는 보장이 있는가? 우리가 타입을 지정한 것은 initialValue고 useState도 initialValue만 보고 string이겠거니 타입 추론만 한거다.
  // 문제는 우리가 새로 만든 useInput은 그런 추론이 없다.
  // 즉, input.tsx로 내뱉어진 value(title)가 const [title, titleHandler] = useInput('') 이후의 모종의 로직으로 인해
  // 갑자기 타입이 boolean, obj, number 등으로 바뀌는 것을 TS는 탐탁지 않은 것이다.
  // 그래서 return문에 [value, handleInput]을 읽기전용으로 박아버린 것이다.
  // 읽기전용으로 박으면? 앞으로 title or content라는 녀석은 우리가 초기에 설정한 string으로 타입이 정해진다(여기서 정해지는 것이다!!)
  // 따라서 Input.tsx나 다른 컴포넌트 아무리 타입을 바꾸려고 지지고 볶아도 우리의 value는 string을 고대로 들고 가는 녀석이 된다!!! 안바뀐다!!!
  return [value, handleInput] as const
}
export default useInput
// GPT가 알려준 방식(T는 제네릭을 뜻한다.)
// 이 방식이 뭐냐면, 제네릭을 이용해서 처음부터 useInput의 타입을 정해주는거임.
// useState에 손 올려보면 괄호안의 초기값으로 금마의 타입이 막 추론되어있지??
// 근데 useInput은 그런게 없으니까 직접 useInput의 타입을 제네릭을 통해서 지정해준 거야.
// 근데 이렇게하기까지는 비효율적인거지. 어차피 값에는 string이나 끽해봤자 number만 들어갈건데.

// const useInput  = <T extends string | number >(initialValue: T ="" as T) => {
//   const [value, setValue] = useState<T>(initialValue)
//   const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value as T)
//   }
//   // as const가 왜 필요???
//   return [value, handleInput] as const
// }

// export default useInput


// import React, { useState } from 'react'

// 내가 썼던 방식 : 근데 useState<string>(initialValue)는 과는 뭔 차이???
// const useInput  = (initialValue: string) => {
//   const [value, setValue] = useState<string>(initialValue)
//   const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value)
//   }
//   // as const가 왜 필요???
//   return [value, handleInput] as const
// }

// export default useInput