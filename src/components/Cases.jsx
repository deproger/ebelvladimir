import { useEffect, useState } from "react";
import { getCases } from "../sanity";
import { Link } from "react-router-dom";
const Cases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      const cases = await getCases();
      setCases(cases);
      console.log(cases);
    };
    fetchCases();
  }, []);

  // Function to filter unique cases based on a property (e.g., title)
  const getUniqueCases = (cases) => {
    const uniqueCases = [];
    const seenTitles = new Set();

    cases.forEach((caseItem) => {
      if (!seenTitles.has(caseItem.title)) {
        seenTitles.add(caseItem.title);
        uniqueCases.push(caseItem);
      }
    });

    return uniqueCases;
  };

  const uniqueCases = getUniqueCases(cases);

  return (
    <>
      <section id="cases">
        <h2 className="uppercase text-[#133B7A] text-[40px] font-bold">
          КЕЙСЫ
        </h2>
        <div className="flex flex-col gap-5">
          {uniqueCases
            .reduce((rows, caseItem, index) => {
              // Create a new row every two items
              if (index % 2 === 0) {
                rows.push([caseItem]); // Start a new row
              } else {
                rows[rows.length - 1].push(caseItem); // Add to the last row
              }
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex gap-5 lg:flex-nowrap flex-wrap"
              >
                {row.map((caseItem, index) => (
                  <div
                    key={caseItem._id} // Assuming each case has a unique _id
                    className={`relative ${
                      rowIndex % 2 === 0
                        ? index === 0
                          ? "lg:w-[60%] w-full"
                          : "lg:w-[40%] w-full"
                        : index === 1
                        ? "lg:w-[60%] w-full"
                        : "lg:w-[40%] w-full"
                    } h-[310px] border-2 border-[#C61F38] rounded-[40px] overflow-hidden`}
                  >
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover"
                    />
                    <Link
                      target="_blank"
                      className="rounded-full p-1 bg-[#1b1b1b50] absolute right-1 bottom-1"
                      to={caseItem.link}
                    >
                      <img src="arrow.svg" alt="Перейти" />
                    </Link>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Cases;
