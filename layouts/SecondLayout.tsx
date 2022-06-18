import SecondHeader from "./Headers/SecondHeader"
type Props = {
    children: JSX.Element,
  };
export default function SecondLayout({ children }: Props) {
  
    return (
      <>
        <SecondHeader />
        {children}
      </>
    )
  }