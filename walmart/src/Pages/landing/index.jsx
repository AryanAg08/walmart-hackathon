import ImageSlider from "../../components/ImageSlider";
import { Navbar } from "../../components/Navbar";

export function Landing() {
  return (
    <>
      <Navbar/>
      <ImageSlider className="imgslider"> </ImageSlider>
    </>
  );
}