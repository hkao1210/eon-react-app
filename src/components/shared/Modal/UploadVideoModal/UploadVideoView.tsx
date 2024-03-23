"use client";

import Button from "@/components/shared/Button";
import UploadVideoModal from "@/components/shared/Modal/UploadVideoModal";
import VideoPreview from "@/components/studio/upload/VideoPreview";
import VideoUploadForm from "@/components/studio/upload/VideoUploadForm";
import useUploadVM from "./UploadVideoVM";
export default function UploadView() {

    const vm = useUploadVM();

    return (
        <>
            {vm.uploadVideoModal?.isOpen && (
                <UploadVideoModal
                    onUpload={(value) => vm.changeValue("videoSrc", value)}
                />
            )}
            <div className="flex flex-col px-8 pt-4">
                <div className="flex justify-between mt-20">
                    <h1 className="text-2xl">Video details</h1>
                    <span className="flex gap-4">
                        <Button type="secondary" onClick={() => vm.router.back()}>
                            Cancel
                        </Button>
                        <Button type="box" onClick={vm.handleSubmit(vm.onSubmit)}>
                            Save
                        </Button>
                    </span>
                </div>
                <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-2">
                    <VideoUploadForm
                        register={vm.register}
                        errors={vm.errors}
                        changeValue={vm.changeValue}
                        thumbnailSrc={vm.thumbnailSrc}
                        isLoading={vm.isLoading}
                    />
                    <VideoPreview videoSrc={vm.videoSrc} videoId={vm.videoId} />
                </div>
            </div>
        </>
    );
}