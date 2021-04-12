import { useEffect, useState } from "react";
import { obtainItemById } from "../api/apiMeli.api";
import { ItemDos } from "../models/ItemDos";

const useObtainItemById = (id: string) => {

    const [item, setItem] = useState<ItemDos>();

    useEffect(() => {
        obtainItemById(id)
            .then((res: any) => {
                if (res) {
                    console.log("item by id res:", res);
                    setItem(res);
                }
            })
            .catch((error: any) => error);
        // eslint-disable-next-line
    }, []);

    return item;
}

export default useObtainItemById;