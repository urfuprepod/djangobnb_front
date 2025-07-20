import countries from "world-countries";

type Country = {
    value: string;
    label: string;
};

const formattedCounteries: Country[] = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
}));

export const useCountries = () => {
    return {
        all: formattedCounteries,
        getByValue: (val: string) =>
            formattedCounteries.find((el) => el.value === val) ?? null,
    };
};
