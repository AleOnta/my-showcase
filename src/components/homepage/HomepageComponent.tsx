import { HomeBodyComponent } from "./HomeBodyComponent";
import { HomeSocialComponent } from "./HomeSocialComponent";
import { HomeTitleComponent } from "./HomeTitleComponent";

export const HomepageComponent = () => {
  return (
    <>
      <HomeTitleComponent />
      <HomeBodyComponent />
      <HomeSocialComponent />
    </>
  );
};
