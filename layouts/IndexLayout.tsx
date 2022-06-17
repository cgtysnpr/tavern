import IndexHeader from "./Headers/IndexHeader"
type Props = {
    children: JSX.Element,
  };
export default function Layout({ children }: Props) {
  
    return (
      <>
        <IndexHeader />
        <main>{children}</main>
      </>
    )
  }