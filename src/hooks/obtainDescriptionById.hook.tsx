import { useEffect, useState } from "react";
import { obtainDescriptionById } from "../api/apiMeli.api";

const useObtainDescriptionById = (id: string) => {

    const [description, setDescription] = useState("");

    useEffect(() => {
        obtainDescriptionById(id)
            .then((res: any) => {
                if (res) {
                    console.log("description by id res:", res.plain_text);
                    setDescription(res.res.plain_text);
                }
            })
            .catch((error: any) => error);
        // eslint-disable-next-line
    }, []);

    return description;
}

export default useObtainDescriptionById;