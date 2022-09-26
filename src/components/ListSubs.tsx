
import { Sub } from "../type";
import Card from "./Card";

interface Props {
  subs: Array<Sub>;
}

const ListSubs = ({ subs }: Props) => {
    
  const renderList = (): JSX.Element[] => {
    return subs.map((sub) => (
        <Card {...sub}  key={sub.nick} />
    ))
  }

  return (
    <>
      {renderList()}
    </>
  );
};

export default ListSubs;
