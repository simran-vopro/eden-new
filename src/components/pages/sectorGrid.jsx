import images from "../theme/imagesPath";
import { useModal } from "./ModalContext";

const sectors = [
  {
    title: "Waste Management",
    description:
      "Optimized utility solutions for sustainable and efficient waste management systems.",
    icon: images.icon11,
  },
  {
    title: "Hospitality",
    description:
      "Reliable energy and utility services tailored for hotels, resorts, and leisure facilities.",
    icon: images.icon5,
  },
  {
    title: "Sports Grounds",
    description:
      "Power and water management designed for athletic venues and recreational facilities.",
    icon: images.icon6,
  },
  {
    title: "Commercial Buildings",
    description:
      "Energy efficiency and system optimization for offices and retail spaces.",
    icon: images.icon7,
  },
  {
    title: "Healthcare",
    description:
      "Utility solutions to meet the critical needs of hospitals and healthcare centers.",
    icon: images.icon8,
  },
  {
    title: "Education",
    description:
      "Tailored energy solutions for schools, universities, and research institutions.",
    icon: images.icon9,
  },
  {
    title: "Manufacturing Industry",
    description:
      "End-to-end utility services for factories and production facilities.",
    icon: images.icon10,
  },
];

export default function SectorGrid() {
  const { openContactModal } = useModal();

  return (
    <div className="container py-5">
      <div className="row g-4 mb-4">
        {sectors.slice(0, 4).map((item, index) => (
          <div key={index} className="col-md-3">
            <div
              onClick={() =>
                openContactModal({
                  service: item.title,
                  step: 1,
                })
              }
              style={{ cursor: "pointer" }}
              className="sector-card text-center h-100 p-4 rounded"
            >
              <div className="icon-box mb-3">
                <img src={item.icon} alt="icon" className="img-fluid" />
              </div>
              <h5 className="mb-2">{item.title}</h5>
              <p className="long-content-medium small mb-0">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4 justify-content-center">
        {sectors.slice(4).map((item, index) => (
          <div key={index} className="col-md-3">
            <div
              onClick={() =>
                openContactModal({
                  service: item.title,
                  step: 1,
                })
              }
              style={{ cursor: "pointer" }}
              className="sector-card text-center h-100 p-4 rounded"
            >
              <div className="icon-box mb-3">
                <img src={item.icon} alt="icon" className="img-fluid" />
              </div>
              <h5 className="mb-2">{item.title}</h5>
              <p className="long-content-medium small mb-0">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
