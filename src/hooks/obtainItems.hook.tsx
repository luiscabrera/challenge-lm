import { useEffect, useState } from "react";
import { obtainResultsByQuery } from "../api/apiMeli.api";

const useObtainItems = (query: string) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        // let mounted = true;
        obtainResultsByQuery(query)
            .then((res: any) => {
                if (res) {
                    // if (mounted) {
                    setItems(res.results);
                    // }
                }
            })
            .catch((error: any) => error);
        // return () => {
        //     mounted = false;
        // }
        // eslint-disable-next-line
    }, []);

    return items;
}

export default useObtainItems;