import React from "react";
import * as AS from "@styles/application/AuthStyles";
import { FaPlus, FaTrash } from "react-icons/fa";
import { AuthData, Lang } from "@constants/AuthData";

interface Store {
  name: string;
  address: string;
  order: string;
}

interface StoreInfoProps {
  stores: Store[];
  setStores: React.Dispatch<React.SetStateAction<Store[]>>;
  lang: Lang;
}

export function StoreInfo({ stores, setStores, lang }: StoreInfoProps) {
  const t = AuthData.translations[lang].store;

  const handleStoreChange = (
    index: number,
    field: keyof Store,
    value: string
  ) => {
    const updated = [...stores];
    updated[index][field] = value;
    setStores(updated);
  };

  const addStore = () => {
    setStores([...stores, { name: "", address: "", order: "" }]);
  };

  const removeStore = (index: number) => {
    setStores(stores.filter((_, i) => i !== index));
  };

  return (
    <AS.StoreContainer>
      <AS.StoreHeader>
        <h3>{t.title}</h3>
        <button type="button" onClick={addStore}>
          <FaPlus /> {t.addButton}
        </button>
      </AS.StoreHeader>

      {stores.map((store, idx) => (
        <AS.StoreFormGroup key={idx}>
          <AS.Input
            type="text"
            placeholder={t.namePlaceholder}
            value={store.name}
            onChange={(e) => handleStoreChange(idx, "name", e.target.value)}
            required
          />
          <AS.Input
            type="text"
            placeholder={t.addressPlaceholder}
            value={store.address}
            onChange={(e) =>
              handleStoreChange(idx, "address", e.target.value)
            }
            required
          />
          <AS.Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder={t.orderPlaceholder}
            value={store.order}
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, "");
              handleStoreChange(idx, "order", onlyNums);
            }}
          />

          {stores.length > 1 && (
            <AS.DeleteButton type="button" onClick={() => removeStore(idx)}>
              <FaTrash />
            </AS.DeleteButton>
          )}
        </AS.StoreFormGroup>
      ))}
    </AS.StoreContainer>
  );
}
