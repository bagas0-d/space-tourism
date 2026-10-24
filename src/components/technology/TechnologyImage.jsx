import { publicAsset } from "../../utils/publicAsset";

export default function TechnologyImage({ img, name }) {
  return (
    <picture className="w-full lg:w-[515px] lg:h-[527px] flex justify-center">
      <source media="(min-width: 1024px)" srcSet={publicAsset(img.portrait)} />
      <img
        src={publicAsset(img.landscape)}
        alt={name || "technology"}
        className="w-full h-[240px] md:h-[357px] lg:h-[527px] object-cover lg:object-contain"
      />
    </picture>
  );
}
