
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={476}
    height={400}
    viewBox="0 0 476 400"
    backgroundColor="#f1e9e9"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="53" y="13" rx="0" ry="0" width="312" height="179" /> 
    <rect x="55" y="219" rx="0" ry="0" width="169" height="21" /> 
    <rect x="56" y="263" rx="0" ry="0" width="169" height="21" /> 
    <rect x="58" y="308" rx="0" ry="0" width="171" height="21" /> 
    <rect x="285" y="216" rx="0" ry="0" width="79" height="26" /> 
    <rect x="275" y="294" rx="0" ry="0" width="97" height="37" />
  </ContentLoader>
)

export default MyLoader

