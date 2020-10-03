import React from "react";
import "./App.css";

// interface AppProps {
//   sendSearchQuery?(): void;
// }

/* 위의 interface 선언 방식보다 아래의 type으로 선언하면 좋은 이유:
<< type으로 선언된 props에 마우스 호버 시 그 객체의 형태를 보여준다 >>
*/

type AppProps = {
  sendSearchQuery?(): void;
};

const App: React.FunctionComponent<AppProps> = ({
  sendSearchQuery = () => undefined,
}) => {
  const [searchValue, setSearchValue] = React.useState<string>();

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const search = () => {
    sendSearchQuery();
  };

  return (
    <div>
      <input
        value={searchValue}
        onChange={onSearchInput}
        name="search"
        type="text"
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default App;
