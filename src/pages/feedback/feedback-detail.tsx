import { Icon } from "@iconify/react";
import images from "assets/images";
import { Divider } from "components/divider";
import { HeaderSub } from "components/header-sub"
import { Feedback, FEEDBACKDATA, FeedbackResponse, FEEDBACKRESPONSES } from "constants/utinities";
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { openUrlInWebview } from "services/zalo";
import { Box, Page, Swiper, useSnackbar } from "zmp-ui"

const FeedbackDetailPage: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const [feedbackData, setFeedbackData] = useState<Feedback>()
    const [responseData, setResponseData] = useState<FeedbackResponse>()

    const { openSnackbar } = useSnackbar();
    const [searchParams] = useSearchParams();

    const feedbackId = searchParams.get("id");

    useEffect(() => {
        // Hàm gọi API để lấy thông tin thành viên
        const fetchFeedbackData = async () => {
            setLoading(true);
            try {
                // Giả sử API trả về thông tin thành viên
                // const response = await fetch(`/api/residents/${feedbackId}`);
                // const data = await response.json();

                const data = FEEDBACKDATA.find(feedback => feedback.id === Number(feedbackId))

                setFeedbackData(data)

            } catch (error) {
                console.error("Failed to fetch feedback data:", error);
                openSnackbar({
                    text: "Không thể tải thông tin thành viên. Vui lòng thử lại sau.",
                    type: "error",
                    duration: 5000,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbackData();
    }, [feedbackId]);

    useEffect(() => {
        // Hàm gọi API để lấy thông tin thành viên
        const fetchResponseData = async () => {
            setLoading(true);
            try {
                // Giả sử API trả về thông tin thành viên
                // const response = await fetch(`/api/residents/${feedbackId}`);
                // const data = await response.json();

                const data = FEEDBACKRESPONSES.find(response => response.feedbackId === Number(feedbackId))

                setResponseData(data)

            } catch (error) {
                console.error("Failed to fetch response data:", error);
                openSnackbar({
                    text: "Không thể tải thông tin thành viên. Vui lòng thử lại sau.",
                    type: "error",
                    duration: 5000,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchResponseData();
    }, [feedbackId]);

    return (
        <Page className="relative flex-1 flex flex-col bg-white pb-[30px]">
            <Box>
                <HeaderSub title="Chi tiết Góp ý - Phản ánh" />
                {
                    feedbackData && !loading ?
                        <Box>
                            <Box>
                                <Swiper autoplay duration={8000} style={{ borderRadius: 0 }}>
                                    {
                                        feedbackData.imageUrl ?
                                            feedbackData.imageUrl.map((item, index) => (
                                                <Swiper.Slide key={index}>
                                                    <img
                                                        onClick={() => openUrlInWebview(item)}
                                                        className="slide-img"
                                                        src={item}
                                                        alt={feedbackData.title}
                                                    />
                                                </Swiper.Slide>
                                            ))
                                            :
                                            <Swiper.Slide>
                                                <img
                                                    className="slide-img"
                                                    src="https://actiosoftware.com/wp-content/uploads/2024/02/resposta-do-smiley-do-cliente-do-feedback-da-avaliacao-1.jpg"
                                                    alt={feedbackData.title}
                                                />
                                            </Swiper.Slide>
                                    }
                                </Swiper>
                            </Box>
                            <Box p={4}>
                                <Box pb={3} mb={3} className="border-b-[1px]">
                                    <h3 className="text-[18px] leading-[24px] font-medium line-clamp-2 mb-1">{feedbackData.title}</h3>
                                    <div>{feedbackData.timestamp}</div>
                                </Box>
                                <Box py={3}>
                                    <div dangerouslySetInnerHTML={{ __html: feedbackData?.content || '' }}>
                                    </div>
                                </Box>
                            </Box>
                            <Divider />
                            <Box p={4}>
                                <Box pb={3} mb={3} className="border-b-[1px]">
                                    <h3 className="text-[18px] leading-[24px] font-medium line-clamp-2 mb-1">Trung tâm điều hành trả lời</h3>
                                    <div>{responseData?.timestamp}</div>
                                </Box>
                                {
                                    responseData
                                        ?
                                        <Box>
                                            <Box py={3}>
                                                <div className="detail-content" dangerouslySetInnerHTML={{
                                                    __html: `
                                                ${responseData?.content}
                                            `}}>
                                                </div>
                                            </Box>
                                            {
                                                responseData.files.length > 0 &&
                                                <Box>
                                                    <Swiper autoplay duration={8000} style={{ borderRadius: 0 }}>
                                                        {
                                                            responseData.files.map((item, index) => (
                                                                <Swiper.Slide key={index}>
                                                                    <img
                                                                        onClick={() => openUrlInWebview(item)}
                                                                        className="slide-img"
                                                                        src={item}
                                                                        alt={feedbackData.title}
                                                                    />
                                                                </Swiper.Slide>
                                                            ))
                                                        }
                                                    </Swiper>
                                                </Box>
                                            }
                                        </Box>
                                        :
                                        <Box mt={10}>
                                            <Box flex justifyContent="center">
                                                <img className="w-[120px] h-auto" src={images.empty} alt="Không có dữ liệu" />
                                            </Box>
                                        </Box>
                                }
                            </Box>
                        </Box>
                        :
                        <Box>Sekeleton</Box>
                }
            </Box>
        </Page>
    )
}

export default FeedbackDetailPage