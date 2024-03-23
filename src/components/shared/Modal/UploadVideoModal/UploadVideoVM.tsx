import {useContext, useEffect, useMemo, useRef, useState} from "react";
import axios from "axios";
import {UploadVideoModalContext} from "@/context/UploadVideoModalContext";
import {v4 as uuid} from "uuid";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {toast} from "react-hot-toast";
import { useRouter } from "next/router";



interface UploadVideoModalProps {
    uploadVideoModal: any;
    changeValue: (id: string, value: string) => void;
    router: any;
    handleSubmit: any;
    onSubmit: SubmitHandler<FieldValues>;
    register: any;
    errors: any;
    thumbnailSrc: string;
    isLoading: boolean;
    videoSrc: string;
    videoId: string;
    }

const useUploadVM = (): UploadVideoModalProps => {
    const uploadVideoModal = useContext(UploadVideoModalContext);

    useEffect(() => uploadVideoModal?.onOpen(), []);

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const videoId = useMemo(() => {
        const buffer = Buffer.alloc(12);

        return uuid({}, buffer).toString("hex");
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm<FieldValues>({
        defaultValues: {
            title: "",
            description: "",
            thumbnailSrc: "",
            videoSrc: "",
        },
    });

    const thumbnailSrc: string = watch("thumbnailSrc");
    const videoSrc: string = watch("videoSrc");

    const changeValue = (id: string, value: string) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios
            .post("/api/videos", data)
            .then(() => {
                toast.success("Video published successfully");
                router.push("/")
            })
            .catch(() => toast.error("Could not publish video"))
            .finally(() => setIsLoading(false));
    };

    return {
        uploadVideoModal,
        changeValue,
        router,
        handleSubmit,
        onSubmit,
        register,
        errors,
        thumbnailSrc,
        isLoading,
        videoSrc,
        videoId
    };
};

export default useUploadVM;
