import { ChevronLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BuyHousePage() {
  const navigate = useNavigate();
  return (
    <div className="mt-40">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/villa")}
      >
        <ChevronLeft strokeWidth={1.75} />
        <h1 className="text-rose-600 font-semibold text-md">Retour</h1>
      </div>

      <div className="mt-5">
        <h1 className="text-2xl font-bold text-gray-700">
          Finaliser votre achat
        </h1>
      </div>
      {/* FIELD SECTIONS */}
      <div className="mt-7 w-full flex items-start justify-between gap-x-5">
        <div className="w-full space-y-5">
          {/* FIRST CONTENT OF DETAILS */}
          <div className="w-full h-80 rounded-xl border border-gray-300 p-5">
            <div className="flex items-center gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className=" text-gray-600 font-medium text-sm">
                    Nom
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Ex: Koffi"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className=" text-gray-600 font-medium text-sm">
                    Prénoms
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Ex: Konan André"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
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

            <div className="flex items-center justify-center">
              <button className="bg-rose-600 text-white w-80 h-10 px-2 py-2 rounded-md font-bold cursor-pointer ">
                Enregister et valider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
