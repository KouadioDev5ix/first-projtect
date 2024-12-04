import React from "react";
import image_1 from "../../Assets/Images/10_VillaHotel_Valentina.jpg";
import image_2 from "../../Assets/Images/Archi-TT5-1-par-ArchiDesign-Designer-Constructeur-de-Maison-Architecte-Haut-de-Gamme-de-Style-Moderne-et-Classique-4-pans-Toit-Plat-et-2-pans.jpg";
import image_3 from "../../Assets/Images/1687342867003.jpg";
import image_4 from "../../Assets/Images/images.jpg";
import image_5 from "../../Assets/Images/ArchitectepourvilladeluxeetprestigeCannesarchitectesVF1jpg_5e9c5280605f4.jpg";
import { BedDouble, DoorOpen, MapPin, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VillaDetails() {
  const navigate = useNavigate();
  return (
    <div className="pb-20 mt-40">
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <img src={image_1} alt="" className="rounded-lg w-full h-[420px] " />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <img
              src={image_2}
              alt=""
              className="rounded-lg w-[250px] h-[200px]"
            />
          </div>
          <div className="">
            <img
              src={image_3}
              alt=""
              className="rounded-lg w-[250px] h-[200px]"
            />
          </div>
          <div className="">
            <img
              src={image_4}
              alt=""
              className="rounded-lg w-[250px] h-[200px]"
            />
          </div>
          <div className="">
            <img
              src={image_5}
              alt=""
              className="rounded-lg w-[250px] h-[200px]"
            />
          </div>
        </div>
      </div>
      {/* DESCRIPTION BOXES */}

      <div className="mt-7 flex items-start justify-between gap-x-5">
        <div className="w-full space-y-5">
          {/* FIRST CONTENT OF DETAILS */}
          <div className="w-full h-fit rounded-xl border border-gray-300 p-5">
            <div className="mb-5">
              <button className="w-fit h-fit font-semibold rounded-lg bg-teal-100 text-teal-600 px-2">
                Villa
              </button>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Villa Adrena de la cité
              </h1>
            </div>
            <div className="flex items-center gap-3 my-5">
              <MapPin strokeWidth={1} />
              <p>Abidjan-Cocody lorem ispus dolor</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full w-7 h-7 bg-rose-600 text-white flex items-center justify-center px-2 py-2 ">
                H
              </div>
              <p className="font-normal text-sm text-gray-800">
                Cette villa est proposée par HomeTour
              </p>
            </div>
            <hr className="my-5" />

            <div className="flex items-center gap-10 my-2 ">
              <div className="text-md">
                <div className="flex items-start gap-2">
                  <span>
                    <UserRound strokeWidth={1} />
                  </span>
                  <span>02</span>
                </div>
                <div>Personne(s)</div>
              </div>
              <div className="text-md">
                <div className="flex items-start gap-2">
                  <span>
                    {" "}
                    <BedDouble strokeWidth={1} />
                  </span>
                  <span>01</span>
                </div>
                <div>Chambre(s)</div>
              </div>
              <div className="text-md">
                <div className="flex items-start gap-2">
                  <span>
                    {" "}
                    <DoorOpen strokeWidth={1} />
                  </span>
                  <span>04</span>
                </div>
                <div>Pièces(s)</div>
              </div>
            </div>
          </div>
          {/* SECOND CONTENT OF DETAILS */}
          <div className="w-full h-fit rounded-xl border border-gray-300 p-7">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">
                Description
              </h1>
            </div>
            <hr className="my-5" />
            <p className=" font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              dolore vel aliquid nesciunt! Error, fugiat consequuntur fugit
              delectus numquam doloribus amet, laudantium corrupti aliquid optio
              quas iste explicabo molestiae nulla!
            </p>
          </div>

          {/* Third CONTENT OF DETAILS */}
          <div className="w-full h-fit rounded-xl border border-gray-300 p-7">
            <div className="mb-5">
              <h1 className="text-2xl font-extrabold text-gray-900">
                Commodités
              </h1>
            </div>
            <div>
              <p className="font-semibold text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                voluptatem modi quos doloribus deserunt illo, accusamus impedit
                assumenda, fuga, laudantium error? Dolores sed necessitatibus
                ipsam dignissimos nam. Dolorum, eveniet doloribus. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Corrupti cumque ab
                libero quos excepturi veritatis rerum temporibus optio beatae
                aliquam, ipsum rem alias dolores at molestiae, similique
                consectetur, aspernatur ratione?
              </p>
            </div>
          </div>
          {/* FOUTH CONTENT OF DETAILS */}
          <div className="w-full h-fit rounded-xl border border-gray-300 p-7">
            <div className="mb-5">
              <h1 className="text-2xl font-extrabold text-gray-900">
                Politique d'achats
              </h1>
            </div>
            <div>
              <p className="font-semibold text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                voluptatem modi quos doloribus deserunt illo, accusamus impedit
                assumenda, fuga, laudantium error? Dolores sed necessitatibus
                ipsam dignissimos nam. Dolorum, eveniet doloribus. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Corrupti cumque ab
                libero quos excepturi veritatis rerum temporibus optio beatae
                aliquam, ipsum rem alias dolores at molestiae, similique
                consectetur, aspernatur ratione?
              </p>
            </div>
          </div>
        </div>

        {/* AMOUNT */}
        <div className="w-[520px] h-fit rounded-xl border border-gray-200 shadow-lg">
          <div className=" bg-gray-300 rounded-tr-lg rounded-tl-lg p-2 ">
            <h1 className="text-xl font-extrabold text-gray-600">
              MONTANT TOTAL
            </h1>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between ">
              <h1 className="text-gray-700 font-semibold text-md">
                Frais de service
              </h1>
              <h1 className="font-bold">5000 FCFA </h1>
            </div>
            <div className="flex items-center justify-between ">
              <h1 className="text-gray-700 font-semibold text-md my-4">Prix</h1>
              <h1 className="font-bold">100 000 000 FCFA </h1>
            </div>

            <hr className="my-4" />

            <div className="flex items-center justify-between ">
              <h1 className="text-gray-700 font-semibold text-md">
                Montant total
              </h1>
              <h1 className="font-bold text-rose-600">100 000 5000 FCFA </h1>
            </div>

            <hr className="my-4" />

            <div
              className="flex items-center justify-center"
              onClick={() => navigate("/buy-home")}
            >
              <button className="bg-rose-600 text-white w-80 h-10 px-2 py-2 rounded-md font-bold cursor-pointer ">
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
