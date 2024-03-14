import React, { useState, useContext, useEffect } from "react";
import * as Styled from "./upload.styles";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { EstateForm, ForSaleForm, TruckForm } from "./detailsform";
import { toast } from "react-toastify";
import axios from "axios";
import { Auth as AuthContext } from "@/context/contexts";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import { PetForm } from "./detailsform/PetForm";
import { FoodForm } from "./detailsform/FoodForm";
import { DiyForm } from "./detailsform/DiyForm";
import { GardenForm } from "./detailsform/GardenForm";
import { BeautyForm } from "./detailsform/BeautyForm";
import { ToyForm } from "./detailsform/ToyForm";
import dynamic from "next/dynamic";
import { MusicForm } from "./detailsform/MusicForm";
import { SportsForm } from "./detailsform/SportsForm";
import { FurnitureForm } from "./detailsform/FurnitureForm";
import { ArtForm } from "./detailsform/ArtForm";
import { ServiceForm } from "./detailsform/ServiceForm";
import { FashionForm } from "./detailsform/FashionForm";

const GooglePlacesAutocomplete = dynamic(
  () => import("react-google-places-autocomplete"),
  { ssr: false }
);

type Props = {
  adLink: string;
  adId: string;
  category: string;
  onNext: () => void;
};

export const Details: React.FC<Props> = ({
  adLink,
  category,
  adId,
  onNext,
}) => {
  const [copied, setCopied] = useState(false);
  const [price, setPrice] = useState("0");
  const [priceUnit, setPriceUnit] = useState("$");
  const { authContext, setAuthContext } = useContext<any>(AuthContext);
  const [addressSelected, setAddressSelected] = useState(false);
  const [location, setLocation] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);
  const [phoneNumberShare, setPhoneNumberShare] = useState(false);
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [telephoneNumberChanged, setTelephoneNumberChanged] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const handleEstateFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/estate/loadEstateInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleTruckFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/truck/loadVehicleInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleForSaleFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/sale/loadForSaleInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handlePetFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/pet/loadPetInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleGardenFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/garden/loadGardenInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleFoodFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/food/loadFoodInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleDiyFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/diy/loadDiyInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleBeautyFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/beauty/loadBeautyInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleToyFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/toys/loadToysInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleMusicFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/music/loadMusicInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleSportsFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/sports/loadSportsInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleFurnitureFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(
        `${SERVER_URI}/furniture/loadFurnitureInfo`,
        {
          ...data,
          price,
          priceUnit,
          adId,
          userId: authContext.user?.id,
          ...location,
          telephoneNumber,
          phoneNumberShare,
        }
      );
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleFashionFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/fashion/loadFashionInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleArtFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/art/loadArtInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleServiceFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter Price!");
    } else if (
      authContext.user?.telephoneNumber == undefined &&
      !telephoneNumberChanged
    ) {
      toast.error("Phone Number Required!");
    } else {
      const res = await axios.post(`${SERVER_URI}/services/loadServiceInfo`, {
        ...data,
        price,
        priceUnit,
        adId,
        userId: authContext.user?.id,
        ...location,
        telephoneNumber,
        phoneNumberShare,
      });
      if (res.data.success) {
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        onNext();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const getCountryCode = async () => {
    const locationInfo = await axios.get(
      `https://api.ipdata.co?api-key=${process.env.NEXT_PUBLIC_IPDATA_API_KEY}`
    );

    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationInfo.data.latitude},${locationInfo.data.longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const country = data.results.find((result) => {
          return result.types.includes("country");
        });
        const countryCode = country
          ? country.address_components.find((component) =>
              component.types.includes("country")
            ).short_name
          : null;
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
          .then((response) => response.json())
          .then((countryData) => {
            let currencySymbol = "";
            for (const key in countryData[0].currencies) {
              if (countryData[0].currencies.hasOwnProperty(key)) {
                currencySymbol = countryData[0].currencies[key].symbol;
                break; // Exit the loop after the first property
              }
            }
            setPriceUnit(currencySymbol);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching country code:", error);
        return null;
      });
  };

  const formComp: any = {
    sale: <ForSaleForm onSave={handleForSaleFormSave} />,
    pet: <PetForm onSave={handlePetFormSave} />,
    food: <FoodForm onSave={handleFoodFormSave} />,
    diy: <DiyForm onSave={handleDiyFormSave} />,
    garden: <GardenForm onSave={handleGardenFormSave} />,
    beauty: <BeautyForm onSave={handleBeautyFormSave} />,
    estate: <EstateForm onSave={handleEstateFormSave} />,
    truck: <TruckForm onSave={handleTruckFormSave} />,
    toys: <ToyForm onSave={handleToyFormSave} />,
    music: <MusicForm onSave={handleMusicFormSave} />,
    sports: <SportsForm onSave={handleSportsFormSave} />,
    furniture: <FurnitureForm onSave={handleFurnitureFormSave} />,
    fashion: <FashionForm onSave={handleFashionFormSave} />,
    art: <ArtForm onSave={handleArtFormSave} />,
    services: <ServiceForm onSave={handleServiceFormSave} />,
  };

  useEffect(() => {
    getCountryCode();
    setTelephoneNumberChanged(false);
  }, []);

  useEffect(() => {
    if (locationInfo == null) return;

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?place_id=${locationInfo.value.place_id}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const countryCode = data.results[0].address_components.find(
          (component) => component.types.includes("country")
        ).short_name;

        const location = data.results[0].geometry.location;
        const lat = location.lat;
        const lng = location.lng;
        setLocation({
          address: locationInfo.label,
          lat,
          lng,
          countryCode,
        });

        setAddressSelected(true);
      })
      .catch((error) => {
        console.error("Error fetching location info:", error);
      });
  }, [locationInfo]);

  return (
    <Styled.DetailsWrapper>
      <Styled.DetailsFormWrapper>
        {formComp[category]}
      </Styled.DetailsFormWrapper>
      <Styled.DetailsPreviewWrapper>
        <Styled.VideoWrapper>
          <video src={SERVER_UPLOAD_URI + adLink} controls />
          <Styled.VideoInfoWrapper>
            <div>
              <span>Video Link</span>
              <p>{SERVER_UPLOAD_URI + adLink}</p>
            </div>
            <CopyToClipboard
              text={SERVER_UPLOAD_URI + adLink}
              onCopy={handleCopyClick}
            >
              {copied ? (
                <MdCheck size={20} />
              ) : (
                <MdOutlineContentCopy size={20} />
              )}
            </CopyToClipboard>
          </Styled.VideoInfoWrapper>
          <Styled.PriceInputWrapper>
            <p>Price*</p>
            <div>
              <span>{priceUnit}</span>
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
          </Styled.PriceInputWrapper>
          <Styled.LocationWrapper>
            <div>
              <p>Location*</p>
              <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
                selectProps={{
                  placeholder: "Enter location",
                  value: locationInfo,
                  onChange: setLocationInfo,
                }}
              />
            </div>
          </Styled.LocationWrapper>
          {authContext.user?.telephoneNumber == undefined && (
            <Styled.PhoneNumberWrapper>
              <div>
                <p>Phone Number</p>
                <PhoneInput
                  defaultCountry="gb"
                  value={telephoneNumber}
                  onChange={(phone) => {
                    setTelephoneNumber(phone);
                    setTelephoneNumberChanged(true);
                  }}
                  inputStyle={{
                    width: "100%",
                  }}
                />
                <div className="phoneNumberShare">
                  <input
                    type="checkbox"
                    name="share"
                    id="share"
                    checked={!phoneNumberShare}
                    onChange={() => {
                      setPhoneNumberShare((prev) => !prev);
                    }}
                  />
                  <label htmlFor="share"> Keep phone number hidden on Ad</label>
                </div>
              </div>
            </Styled.PhoneNumberWrapper>
          )}
        </Styled.VideoWrapper>
      </Styled.DetailsPreviewWrapper>
    </Styled.DetailsWrapper>
  );
};
