import img1 from "../assets/images/story/story1.png";
import img2 from "../assets/images/story/story2.png";
import img3 from "../assets/images/story/story3.png";
import img4 from "../assets/images/story/story4.png";
import img5 from "../assets/images/story/story5.png";
import img6 from "../assets/images/story/story6.png";

export default function StoryPage() {
  return (
    <div className="p-4 space-y-6">
      <img src={img1} alt="story img 1" />
      <img src={img2} alt="story img 2" />
      <img src={img3} alt="story img 3" />
      <img src={img4} alt="story img 4" />
      <img src={img5} alt="story img 5" />
      <img src={img6} alt="story img 6" />
    </div>
  );
}
