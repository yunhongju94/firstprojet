//리엑트 사용하기 위해 임폴트
import React, { Fragment, useState } from "react";
import Error from "./Error";

function Greeting() {
  //Hooks
  //useXXXXXX
  // 초기값
  const [greeting, setGreeting] = useState("");
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(false);
  const [error, setError] = useState({ error: false, msg: "" });

  const handleChange = (e) => {
    setError({ error: false, msg: "" });
    setGreeting(e.target.value);
  };
  const handleClick = (e) => {
    if (greeting === "") {
      setError({ error: true, msg: "메세지를 입력해주세요." });
      return;
    } else if (greeting.length > 15) {
      setError({ error: true, msg: "길이이가 길어요." });
      return;
    } else {
      //TODO Nothing
    }

    setShow(!show);
  };

  return (
    <div>
      <div>
        {show ? (
          <h1> {`Hello,! ${greeting}`}</h1>
        ) : (
          <Fragment>
            <div>
              <p>Can you Tell me?</p>
              <input
                type="text"
                placeholder="ex) john Doe"
                value={greeting}
                onChange={handleChange}
              />
              <button onClick={handleClick}>Countinue</button>
            </div>
            {error.error && <Error error={error} />}
          </Fragment>
        )}
      </div>
    </div>
  );
}

//내보내기
export default Greeting;

{
  /* 이버튼을 클릭을 하면
               
                    <button onClick={()=>{setNum(num+1)}}> +1</button>
                    <span>{num}</span>
                    <button onClick={()=>{setNum(num-1)}}> -1</button>
                </div> */
}
