import Categories from "@/shared/components/Categories";
import PropertiesListContainer from "@/components/Properties/PropertiesListContainer";
import { MainContainer } from "@/shared/components";

const categoriesItems = [
    { src: "beach", alt: "Category - Beach", title: "Beach" },
    { src: "wow", alt: "Category - Wow", title: "Wow" },
    { src: "skis", alt: "Category - Skis", title: "Skis" },
];

export default function Home() {
    return (
        <MainContainer>
            <Categories categories={categoriesItems} />
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-col-5 gap-6">
                <PropertiesListContainer />
            </div>
            Django BnB
            <h2 className="text-airbnb">Django and Next rules</h2>
        </MainContainer>
    );
}
