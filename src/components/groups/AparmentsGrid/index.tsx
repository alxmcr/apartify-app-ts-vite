import { AparmentsGridProps } from "../../types/apartmentComponents"
import { ApartmentCard } from "../cards/ApartmentCard"
import "./AparmentsGrid.scss"

export const AparmentsGrid = ({ apartments = [] }: AparmentsGridProps) => {
    if (apartments?.length === 0) return <p className="apartmentsgrid__message">There is not an apartment registered.</p>

    return (
        <section className="apartmentsgrid">
            {
                apartments?.map(apartment => (
                    <ApartmentCard
                        key={apartment?.ap_apartment}
                        apartment={apartment}
                    />
                ))
            }
        </section>
    )
}