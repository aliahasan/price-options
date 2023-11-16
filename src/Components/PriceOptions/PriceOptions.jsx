import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to cardio equipment",
            "Free weights area",
            "Locker room access",
            "Group fitness classes",
            "Limited guest passes (2 per month)",
            "Discounts on fitness apparel"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 49.99,
          "features": [
            "All Basic features",
            "Access to strength training machines",
            "Personal trainer consultation (monthly)",
            "Towel service",
            "Unlimited guest passes",
            "Nutrition workshop access"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 79.99,
          "features": [
            "All Standard features",
            "Unlimited personal training sessions",
            "Sauna and steam room access",
            "Nutritional counseling",
            "Exclusive classes (e.g., yoga, spinning)",
            "Discounts on supplements"
          ]
        }
      ]
      

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices In the Town</h2>
            <div className="grid md:grid-cols-3 gap-6"> 
            {
              priceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;