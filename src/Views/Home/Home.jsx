import { BedDouble, DoorOpen, MapPin, UserRound } from "lucide-react";
import React, { useEffect, useState } from "react";
import Villa_1 from "../../Assets/Images/10_VillaHotel_Valentina.jpg";
import Villa_2 from "../../Assets/Images/1687342867003.jpg";
import Villa_3 from "../../Assets/Images/2-maison-de-luxe-à-vendre-à-alicante.jpg";
import Villa_4 from "../../Assets/Images/34676_00-2023-05-17-1545.jpg";
import Villa_5 from "../../Assets/Images/39ce1b63-97ee-4fba-a92f-9bbc826e553f.jpg";
import Villa_6 from "../../Assets/Images/417e7fc0-d3a9-43b7-9d77-b69cf07b26d8.jpg";
import Villa_7 from "../../Assets/Images/765244c9-df6b-4fe6-a0bb-6fb39c2c753f.webp";
import Villa_8 from "../../Assets/Images/Archi-TT5-1-par-ArchiDesign-Designer-Constructeur-de-Maison-Architecte-Haut-de-Gamme-de-Style-Moderne-et-Classique-4-pans-Toit-Plat-et-2-pans.jpg";
import Villa_9 from "../../Assets/Images/ArchitectepourvilladeluxeetprestigeCannesarchitectesVF1jpg_5e9c5280605f4.jpg";
import Villa_10 from "../../Assets/Images/Comment-bien-vendre-une-villa-de-luxe.jpg";
import Villa_11 from "../../Assets/Images/Exterior-2-High-800x554.jpg";
import Villa_12 from "../../Assets/Images/Exterior-2-High-800x554.jpg";
import Villa_13 from "../../Assets/Images/images.jpg";
import Villa_14 from "../../Assets/Images/maisonmoderneluxeCannesjpg_64859ab01c0e7.jpg";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const [activeBtn, setactiveBtn] = useState({ index: 0, value: "VILLA" });
  const [isLoading, setIsloading] = useState(false);

  const useParam = useParams();
  console.log("ISSSS", useParam);

  const navigate = useNavigate();

  const [homeData] = useState([
    {
      id: 1,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Adrena de la cité",
      location: "Abidjan-Cocody",
      price: "100 000 000",
      images: Villa_1,
      nomberOfPeople: "4",
      nomberOfRoom: "4",
      nomberOfPieces: "3",
    },
    {
      id: 2,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Akadjou",
      location: "Abidjan-Koumassi",
      price: "70 000 000",
      images: Villa_2,
      nomberOfPeople: "3",
      nomberOfRoom: "1",
      nomberOfPieces: "2",
    },
    {
      id: 3,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Konan",
      location: "Abidjan-Koumassi",
      price: "80 000 000",
      images: Villa_3,
      nomberOfPeople: "3",
      nomberOfRoom: "1",
      nomberOfPieces: "2",
    },
    {
      id: 4,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Akadjou",
      location: "Abidjan-Yopougon",
      price: "200 000 000",
      images: Villa_4,
      nomberOfPeople: "10",
      nomberOfRoom: "5",
      nomberOfPieces: "8",
    },
    {
      id: 5,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Kassi Aledjou",
      location: "Daloa Keneddy",
      price: "150 000 000",
      images: Villa_5,
      nomberOfPeople: "4",
      nomberOfRoom: "4",
      nomberOfPieces: "5",
    },
    {
      id: 6,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Akadjou",
      location: "Abidjan-Koumassi",
      price: "70 000 000",
      images: Villa_6,
      nomberOfPeople: "3",
      nomberOfRoom: "1",
      nomberOfPieces: "2",
    },
    {
      id: 7,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Akadjou",
      location: "Abidjan-Koumassi",
      price: "70 000 000",
      images: Villa_7,
      nomberOfPeople: "3",
      nomberOfRoom: "1",
      nomberOfPieces: "2",
    },
    {
      id: 8,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Akadjou",
      location: "Abidjan-Koumassi",
      price: "70 000 000",
      images: Villa_8,
      nomberOfPeople: "3",
      nomberOfRoom: "1",
      nomberOfPieces: "2",
    },
    {
      id: 9,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Akadjou",
      location: "Abidjan-Koumassi",
      price: "70 000 000",
      images: Villa_9,
      nomberOfPeople: "3",
      nomberOfRoom: "1",
      nomberOfPieces: "2",
    },
    {
      id: 10,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Akadjou",
      location: "Abidjan-Koumassi",
      price: "50 000 000",
      images: Villa_10,
      nomberOfPeople: "3",
      nomberOfRoom: "1",
      nomberOfPieces: "2",
    },
    // {
    //   id: 11,
    //   people: <UserRound strokeWidth={1} />,
    //   bedRoom: <BedDouble strokeWidth={1} />,
    //   door: <DoorOpen strokeWidth={1} />,
    //   map: <MapPin strokeWidth={1} />,
    //   title: "Villa Akadjou",
    //   location: "Abidjan-Koumassi",
    //   price: "170 000 000",
    //   images: Villa_11,
    //   nomberOfPeople: "3",
    //   nomberOfRoom: "1",
    //   nomberOfPieces: "2",
    // },
    // {
    //   id: 12,
    //   people: <UserRound strokeWidth={1} />,
    //   bedRoom: <BedDouble strokeWidth={1} />,
    //   door: <DoorOpen strokeWidth={1} />,
    //   map: <MapPin strokeWidth={1} />,
    //   title: "Villa Akadjou",
    //   location: "Abidjan-Koumassi",
    //   price: "90 000 000",
    //   images: Villa_12,
    //   nomberOfPeople: "3",
    //   nomberOfRoom: "1",
    //   nomberOfPieces: "2",
    // },
    {
      id: 11,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Akadjou",
      location: "Abidjan-Koumassi",
      price: "250 000 000",
      images: Villa_13,
      nomberOfPeople: "8",
      nomberOfRoom: "10",
      nomberOfPieces: "14",
    },
    {
      id: 12,
      people: <UserRound strokeWidth={1} />,
      bedRoom: <BedDouble strokeWidth={1} />,
      door: <DoorOpen strokeWidth={1} />,
      map: <MapPin strokeWidth={1} />,
      title: "Villa Akadjou",
      location: "Palmeraie",
      price: "145 000 000",
      images: Villa_14,
      nomberOfPeople: "5",
      nomberOfRoom: "3",
      nomberOfPieces: "6",
    },
  ]);

  useEffect(() => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  }, []);

  const TabulationBtn = [
    {
      label: "Villa",
      value: "VILLA",
    },
    {
      label: "Duplex",
      value: "DUPLEX",
    },
    {
      label: "Château",
      value: "CHATEAU",
    },
    {
      label: "Cabane",
      value: "CABANE",
    },
    {
      label: "Appartement",
      value: "APPARTEMENT",
    },
  ];
  return (
    <div className="mt-40">
      <div className="">
        <h1 className="text-gray-700 font-extrabold text-3xl tracking-tight leading-tight">
          Heureux de vous revoir !
        </h1>
        <p className="text-base text-gray-600 font-normal mt-5 ">
          Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Ut
          eveniet magnam aperiam quia repellat <br /> eos deserunt veniam
          laborum aliquid .
        </p>
      </div>

      {/* Tabulation section */}

      <div className="flex mt-7">
        <div className="flex items-center gap-2">
          {TabulationBtn.map((item, index) => (
            <button
              key={index}
              onClick={() =>
                setactiveBtn({
                  item: item.value,
                  index: index,
                })
              }
              className={`${
                activeBtn.index === index
                  ? " bg-gray-900 text-white font-bold rounded-full h-9 px-4 w-fit text-sm"
                  : "hover:bg-gray-100 text-sm  text-gray-600 rounded-full h-9 px-4 w-fit"
              } `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* CARDS HOME ITEMS LSITE */}

      <div className="">
        <>
          {isLoading ? (
            <div className="flex items-center justify-center mt-10">
              <div className="bg-black rounded-md flex items-center gap-3 px-2 h-10">
                <svg
                  className="text-gray-100 animate-spin"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-900"
                  ></path>
                </svg>
                <span className="text-white font-bold">Chargement...</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-4 mt-10 gap-7">
              {homeData.map((item) => (
                <div className="cursor-pointer" key={item.id}>
                  <div
                    className="h-auto w-full mb-4 "
                    onClick={() => navigate(`/villa`)}
                  >
                    <img
                      src={item.images}
                      alt="Villa"
                      className="rounded-lg w-[250px] h-[200px]"
                    />
                  </div>
                  {/* icons items */}
                  <div className="flex items-center gap-7 my-2 ">
                    <div className="text-xs">
                      <div className="flex items-start gap-2">
                        <span>{item.people}</span>
                        <span>{item.nomberOfPeople}</span>
                      </div>
                      <div>Personne(s)</div>
                    </div>
                    <div className="text-xs">
                      <div className="flex items-start gap-2">
                        <span>{item.bedRoom}</span>
                        <span>{item.nomberOfRoom}</span>
                      </div>
                      <div>Chambre(s)</div>
                    </div>
                    <div className="text-xs">
                      <div className="flex items-start gap-2">
                        <span>{item.door}</span>
                        <span>{item.nomberOfPieces}</span>
                      </div>
                      <div>Pièces(s)</div>
                    </div>
                  </div>
                  {/* Tilte */}
                  <div className="my-1">
                    <h1 className="text-gray-800 font-bold ">{item.title}</h1>
                  </div>
                  {/* LOCATIONS */}
                  <div className="flex items-center gap-2 text-xs">
                    <span>{item.map}</span>
                    <span>{item.location}</span>
                  </div>
                  {/* PRICE */}
                  <div className="mt-2 ">
                    <h1 className="font-semibold text-rose-600 ">
                      {item.price} FCFA
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      </div>
    </div>
  );
}
