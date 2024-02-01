import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-pets";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const PetsType: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    petsType: "",
    dogs: {
      breed: "",
      age: "",
      gender: "",
      vaccinations: "",
    },
    cats: {
      breed: "",
      age: "",
      gender: "",
      vaccinations: "",
    },
    birds: {
      breed: "",
      age: "",
      gender: "",
    },
    fish: {
      species: "",
      tankSize: "",
      careLevel: "",
      diet: "",
    },
    reptiles: {
      species: "",
      age: "",
      gender: "",
      size: "",
    },
    rabbits: {
      breed: "",
      age: "",
      gender: "",
      vaccinations: "",
    },
    rodents: {
      species: "",
      age: "",
      gender: "",
    },
    livestock: {
      type: "",
      age: "",
      gender: "",
    },
    horses: {
      breed: "",
      age: "",
      gender: "",
      trainingLevel: "",
      vaccinations: "",
      healthCertification: "",
      hoofCare: "",
      insurance: "",
    },
    amphibian: {
      species: "",
      age: "",
      gender: "",
    },
  });

  const handleSave = () => {
    if (!form.petsType) {
      toast.error("Select pet type");
    } else if (form.petsType == "Dogs") {
      if (!form.dogs.breed) {
        toast.error("Select breed");
      } else if (!form.dogs.age) {
        toast.error("Select age");
      } else if (!form.dogs.gender) {
        toast.error("Select gender");
      } else if (!form.dogs.vaccinations) {
        toast.error("Select vaccinations");
      } else {
        onSave({ petKind: form.petsType, ...form.dogs });
      }
    } else if (form.petsType == "Cats") {
      if (!form.cats.breed) {
        toast.error("Select breed");
      } else if (!form.cats.age) {
        toast.error("Select age");
      } else if (!form.cats.gender) {
        toast.error("Select gender");
      } else if (!form.cats.vaccinations) {
        toast.error("Select vaccinations");
      } else {
        onSave({ petKind: form.petsType, ...form.cats });
      }
    } else if (form.petsType == "Birds") {
      if (!form.birds.breed) {
        toast.error("Select breed");
      } else if (!form.birds.age) {
        toast.error("Select age");
      } else if (!form.birds.gender) {
        toast.error("Select gender");
      } else {
        onSave({ petKind: form.petsType, ...form.birds });
      }
    } else if (form.petsType == "Fish") {
      if (!form.fish.species) {
        toast.error("Select species");
      } else if (!form.fish.tankSize) {
        toast.error("Select tank size requirements");
      } else if (!form.fish.careLevel) {
        toast.error("Select gender");
      } else {
        onSave({ petKind: form.petsType, ...form.fish });
      }
    } else if (form.petsType == "Reptile") {
      if (!form.reptiles.species) {
        toast.error("Select species");
      } else if (!form.reptiles.age) {
        toast.error("Select age");
      } else if (!form.reptiles.gender) {
        toast.error("Select gender");
      } else if (!form.reptiles.size) {
        toast.error("Select size");
      } else {
        onSave({ petKind: form.petsType, ...form.reptiles });
      }
    } else if (form.petsType == "Rabbits") {
      if (!form.rabbits.breed) {
        toast.error("Select breed");
      } else if (!form.rabbits.age) {
        toast.error("Select age");
      } else if (!form.rabbits.gender) {
        toast.error("Select gender");
      } else if (!form.rabbits.vaccinations) {
        toast.error("Select vaccinations");
      } else {
        onSave({ petKind: form.petsType, ...form.rabbits });
      }
    } else if (form.petsType == "Rodents") {
      if (!form.rodents.species) {
        toast.error("Select species");
      } else if (!form.rodents.age) {
        toast.error("Select age");
      } else if (!form.rodents.gender) {
        toast.error("Select gender");
      } else {
        onSave({ petKind: form.petsType, ...form.rodents });
      }
    } else if (form.petsType == "Livestock") {
      if (!form.livestock.type) {
        toast.error("Select type");
      } else if (!form.livestock.age) {
        toast.error("Select age");
      } else if (!form.livestock.gender) {
        toast.error("Select gender");
      } else {
        onSave({ petKind: form.petsType, ...form.livestock });
      }
    } else if (form.petsType == "Horses") {
      if (!form.horses.breed) {
        toast.error("Select breed");
      } else if (!form.horses.age) {
        toast.error("Select age");
      } else if (!form.horses.gender) {
        toast.error("Select gender");
      } else if (!form.horses.trainingLevel) {
        toast.error("Select training level");
      } else if (!form.horses.vaccinations) {
        toast.error("Select vaccinations");
      } else if (!form.horses.healthCertification) {
        toast.error("Select health certification");
      } else if (!form.horses.hoofCare) {
        toast.error("Select hoof care");
      } else if (!form.horses.insurance) {
        toast.error("Select insurance");
      } else {
        onSave({ petKind: form.petsType, ...form.horses });
      }
    } else if (form.petsType == "Amphibian") {
      if (!form.amphibian.species) {
        toast.error("Select species");
      } else if (!form.amphibian.age) {
        toast.error("Select age");
      } else if (!form.amphibian.gender) {
        toast.error("Select gender");
      } else {
        onSave({ petKind: form.petsType, ...form.amphibian });
      }
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        data={selectData.pet.Petsforsale.Type}
        label="Pet Type"
        placeholder="Select Pet Type"
        value={form.petsType}
        onChange={(value) => setForm((prev) => ({ ...prev, petsType: value }))}
      />
      {form.petsType == "Dogs" && (
        <>
          <SingleSelection
            data={selectData.pet.Petsforsale.Dogs.Breed}
            label="Breed"
            placeholder="Select Breed"
            value={form.dogs.breed}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                dogs: { ...prev.dogs, breed: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Dogs.Age}
            label="Age"
            placeholder="Select Age"
            value={form.dogs.age}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                dogs: { ...prev.dogs, age: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Dogs.Gender}
            label="Gender"
            placeholder="Select Gender"
            value={form.dogs.gender}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                dogs: { ...prev.dogs, gender: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Dogs.Vaccinations}
            label="Vaccinations"
            placeholder="Select Vaccinations"
            value={form.dogs.vaccinations}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                dogs: { ...prev.dogs, vaccinations: value },
              }))
            }
          />
        </>
      )}
      {form.petsType == "Cats" && (
        <>
          <SingleSelection
            data={selectData.pet.Petsforsale.Cats.Breed}
            label="Breed"
            placeholder="Select Breed"
            value={form.cats.breed}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cats: { ...prev.cats, breed: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Cats.Age}
            label="Age"
            placeholder="Select Age"
            value={form.cats.age}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cats: { ...prev.cats, age: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Cats.Gender}
            label="Gender"
            placeholder="Select Gender"
            value={form.cats.gender}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cats: { ...prev.cats, gender: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Cats.Vaccinations}
            label="Vaccinations"
            placeholder="Select Vaccinations"
            value={form.cats.vaccinations}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cats: { ...prev.cats, vaccinations: value },
              }))
            }
          />
        </>
      )}
      {form.petsType == "Birds" && (
        <>
          <SingleSelection
            data={selectData.pet.Petsforsale.Birds.Breed}
            label="Breed"
            placeholder="Select Breed"
            value={form.birds.breed}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                birds: { ...prev.birds, breed: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Birds.Age}
            label="Age"
            placeholder="Select Age"
            value={form.birds.age}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                birds: { ...prev.birds, age: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Birds.Gender}
            label="Gender"
            placeholder="Select Gender"
            value={form.birds.gender}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                birds: { ...prev.birds, gender: value },
              }))
            }
          />
        </>
      )}
      {form.petsType == "Fish" && (
        <>
          <SingleSelection
            data={selectData.pet.Petsforsale.Fish.Species}
            label="Species"
            placeholder="Select Species"
            value={form.fish.species}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                fish: { ...prev.fish, species: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Fish.TankSize}
            label="Tank Size Requirements"
            placeholder="Select Tank Size Requirements"
            value={form.fish.tankSize}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                fish: { ...prev.fish, tankSize: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Fish.CareLevel}
            label="Care Level"
            placeholder="Select Care Level"
            value={form.fish.careLevel}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                fish: { ...prev.fish, careLevel: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Fish.Diet}
            label="Diet"
            placeholder="Select Diet"
            value={form.fish.diet}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                fish: { ...prev.fish, diet: value },
              }))
            }
          />
        </>
      )}
      {form.petsType == "Reptile" && (
        <>
          <SingleSelection
            data={selectData.pet.Petsforsale.Reptiles.Species}
            label="Species"
            placeholder="Select Species"
            value={form.reptiles.species}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                reptiles: { ...prev.reptiles, species: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Reptiles.Age}
            label="Age"
            placeholder="Select Age"
            value={form.reptiles.age}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                reptiles: { ...prev.reptiles, age: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Reptiles.Gender}
            label="Gender"
            placeholder="Select Gender"
            value={form.reptiles.gender}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                reptiles: { ...prev.reptiles, gender: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Reptiles.Size}
            label="Size"
            placeholder="Select Size"
            value={form.reptiles.size}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                reptiles: { ...prev.reptiles, size: value },
              }))
            }
          />
        </>
      )}
      {form.petsType == "Rabbits" && (
        <>
          <SingleSelection
            data={selectData.pet.Petsforsale.Rabbits.Breed}
            label="Breed"
            placeholder="Select Breed"
            value={form.rabbits.breed}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                rabbits: { ...prev.rabbits, breed: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Rabbits.Age}
            label="Age"
            placeholder="Select Age"
            value={form.rabbits.age}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                rabbits: { ...prev.rabbits, age: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Rabbits.Gender}
            label="Gender"
            placeholder="Select Gender"
            value={form.rabbits.gender}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                rabbits: { ...prev.rabbits, gender: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Rabbits.Vaccinations}
            label="Vaccinations"
            placeholder="Select Vaccinations"
            value={form.rabbits.vaccinations}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                rabbits: { ...prev.rabbits, vaccinations: value },
              }))
            }
          />
        </>
      )}
      {form.petsType == "Rodents" && (
        <>
          <SingleSelection
            data={selectData.pet.Petsforsale.Rodents.Species}
            label="Species"
            placeholder="Select Species"
            value={form.rodents.species}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                rodents: { ...prev.rodents, species: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Rodents.Age}
            label="Age"
            placeholder="Select Age"
            value={form.rodents.age}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                rodents: { ...prev.rodents, age: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Rodents.Gender}
            label="Gender"
            placeholder="Select Gender"
            value={form.rodents.gender}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                rodents: { ...prev.rodents, gender: value },
              }))
            }
          />
        </>
      )}
      {form.petsType == "Livestock" && (
        <>
          <SingleSelection
            data={selectData.pet.Petsforsale.Livestock.Type}
            label="Type"
            placeholder="Select Type"
            value={form.livestock.type}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                livestock: { ...prev.livestock, type: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Livestock.Age}
            label="Age"
            placeholder="Select Age"
            value={form.livestock.age}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                livestock: { ...prev.livestock, age: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Livestock.Gender}
            label="Gender"
            placeholder="Select Gender"
            value={form.livestock.gender}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                livestock: { ...prev.livestock, gender: value },
              }))
            }
          />
        </>
      )}
      {form.petsType == "Horses" && (
        <>
          <SingleSelection
            data={selectData.pet.Petsforsale.Horses.Breed}
            label="Breed"
            placeholder="Select Breed"
            value={form.horses.breed}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                horses: { ...prev.horses, breed: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Horses.Age}
            label="Age"
            placeholder="Select Age"
            value={form.horses.age}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                horses: { ...prev.horses, age: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Horses.Gender}
            label="Gender"
            placeholder="Select Gender"
            value={form.horses.gender}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                horses: { ...prev.horses, gender: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Horses.TrainingLevel}
            label="Training Level"
            placeholder="Select Training Level"
            value={form.horses.trainingLevel}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                horses: { ...prev.horses, trainingLevel: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Horses.Vaccinations}
            label="Vaccinations"
            placeholder="Select Vaccinations"
            value={form.horses.vaccinations}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                horses: { ...prev.horses, vaccinations: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Horses.HealthCertification}
            label="Health Certification"
            placeholder="Select Health Certification"
            value={form.horses.healthCertification}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                horses: { ...prev.horses, healthCertification: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Horses.HoofCare}
            label="HoofCare"
            placeholder="Select HoofCare"
            value={form.horses.hoofCare}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                horses: { ...prev.horses, hoofCare: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Horses.Insurance}
            label="Insurance"
            placeholder="Select Insurance"
            value={form.horses.insurance}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                horses: { ...prev.horses, insurance: value },
              }))
            }
          />
        </>
      )}
      {form.petsType == "Amphibian" && (
        <>
          <SingleSelection
            data={selectData.pet.Petsforsale.Amphibian.Species}
            label="Species"
            placeholder="Select Species"
            value={form.amphibian.species}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                amphibian: { ...prev.amphibian, species: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Amphibian.Age}
            label="Age"
            placeholder="Select Age"
            value={form.amphibian.age}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                amphibian: { ...prev.amphibian, age: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Amphibian.Gender}
            label="Gender"
            placeholder="Select Gender"
            value={form.amphibian.gender}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                amphibian: { ...prev.amphibian, gender: value },
              }))
            }
          />
        </>
      )}
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
