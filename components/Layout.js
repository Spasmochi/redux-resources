import tw from "twin.macro";

const Wrapper = tw.div`
  flex
  flex-col
  items-center
  justify-center
  py-16
  overflow-hidden
`;

export const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;
