import React, { useState, useContext, useEffect } from "react";
import * as Styled from "./upload.styles";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { EstateForm, ForSaleForm, TruckForm } from "./detailsform";
import { toast } from "react-toastify";
import axios from "axios";
import { Auth as AuthContext } from "@/context/contexts";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

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
  const { authContext } = useContext<any>(AuthContext);
  const [addressSelected, setAddressSelected] = useState(false);
  const [location, setLocation] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);

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
      toast.error("Enter the Price!");
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
      toast.error("Enter the Price!");
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
      toast.error("Enter the Price!");
    } else {
      const res = await axios.post(`${SERVER_URI}/sale/loadForSaleInfo`, {
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

  const handleChildrenFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter the Price!");
    } else {
      const res = await axios.post(`${SERVER_URI}/children/loadChildrenInfo`, {
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

  const handleGardenFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter the Price!");
    } else {
      const res = await axios.post(`${SERVER_URI}/garden/loadGardenInfo`, {
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

  const handleEducationFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter the Price!");
    } else {
      const res = await axios.post(
        `${SERVER_URI}/education/loadEducationInfo`,
        {
          ...data,
          price,
          priceUnit,
          adId,
          userId: authContext.user?.id,
          ...location,
        }
      );
      if (res.data.success) {
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
      toast.error("Enter the Price!");
    } else {
      const res = await axios.post(`${SERVER_URI}/art/loadArtInfo`, {
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

  const handleSportsFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter the Price!");
    } else {
      const res = await axios.post(`${SERVER_URI}/sports/loadSportsInfo`, {
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

  const handleFashionFormSave = async (data: any) => {
    if (!addressSelected) {
      toast.error("Select location!");
    } else if (Number(price) === 0) {
      toast.error("Enter the Price!");
    } else {
      const res = await axios.post(`${SERVER_URI}/fashion/loadFashionInfo`, {
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

  const formComp: any = {
    sales: <ForSaleForm onSave={handleForSaleFormSave} />,
    garden: <ForSaleForm onSave={handleGardenFormSave} />,
    fashion: <ForSaleForm onSave={handleFashionFormSave} />,
    sports: <ForSaleForm onSave={handleSportsFormSave} />,
    children: <ForSaleForm onSave={handleChildrenFormSave} />,
    art: <ForSaleForm onSave={handleArtFormSave} />,
    education: <ForSaleForm onSave={handleEducationFormSave} />,
    estate: <EstateForm onSave={handleEstateFormSave} />,
    truck: <TruckForm onSave={handleTruckFormSave} />,
    service: "service",
    pet: "pet",
  };

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
            <p>Price</p>
            <div>
              <select
                value={priceUnit}
                onChange={(e) => setPriceUnit(e.target.value)}
              >
                <option value="$">$</option>
                <option value="€">€</option>
                <option value="£">£</option>
                <option value="¥">¥</option>
                <option value="₣">₣</option>
                <option value="₹">₹</option>
              </select>
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
          </Styled.PriceInputWrapper>
          <Styled.LocationWrapper>
            <Styled.LocationSelectWrapper>
              <div>
                <GooglePlacesAutocomplete
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
                  selectProps={{
                    placeholder: "Select location here...",
                    value: locationInfo,
                    onChange: setLocationInfo,
                  }}
                />
              </div>
            </Styled.LocationSelectWrapper>
          </Styled.LocationWrapper>
        </Styled.VideoWrapper>
      </Styled.DetailsPreviewWrapper>
    </Styled.DetailsWrapper>
  );
};
