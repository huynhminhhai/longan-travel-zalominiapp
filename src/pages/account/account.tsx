import { Icon } from "@iconify/react";
import images from "assets/images";
import { HeaderSub } from "components/header-sub"
import React from "react"
import { useLoginWithZalo } from "services/loginWithZalo";
import { openPermissionSettingApp } from "services/zalo";
import { useStoreApp } from "store/store";
import { Avatar, Box, List, Page, useNavigate, useSnackbar } from "zmp-ui"

const AccountPage: React.FC = () => {

    const { Item } = List;
    const navigate = useNavigate()

    const { loginWithZalo } = useLoginWithZalo()
    const { openSnackbar } = useSnackbar();

    const { setIsLoadingFullScreen } = useStoreApp();

    const handleLogout = async () => {
        try {
            setIsLoadingFullScreen(true)

            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Xóa access token')

            openSnackbar({
                icon: true,
                text: "Đăng xuất thành công thành công",
                type: 'success',
                action: { text: "Đóng", close: true },
                duration: 5000,
            });

            navigate('/account')
        } catch (error) {
            console.log(error)
            openSnackbar({
                icon: true,
                text: "Có lỗi xảy ra, vui lòng thử lại sau.",
                type: "error",
                action: { text: "Đóng", close: true },
                duration: 5000,
            });
        } finally {
            setIsLoadingFullScreen(false)
        }


    }

    return (
        <Page className="relative flex-1 flex flex-col bg-white pb-[66px]" style={{ backgroundColor: '#f5f6f7' }}>
            <Box>
                <HeaderSub title="Tài khoản" />
                <Box>
                    <Box m={4}>
                        <List className="bg-white rounded-lg">
                            <div className="px-4 pt-4 pb-2 text-[18px] leading-[1] font-medium">Tài khoản</div>
                            <Item
                                onClick={() => navigate('/profile-account')}
                                title="Thông tin"
                                prefix={<img src={images.resume} width={30} />}
                                suffix={<Icon fontSize={20} icon="formkit:right" />}
                            />
                            <Item
                                onClick={() => navigate('/change-password')}
                                title="Đổi mật khẩu"
                                prefix={<img src={images.changePw} width={30} />}
                                suffix={<Icon fontSize={20} icon="formkit:right" />}
                            />
                            <Item
                                onClick={() => handleLogout()}
                                title="Đăng xuất"
                                prefix={<img src={images.logout} width={30} />}
                                suffix={<Icon fontSize={20} icon="formkit:right" />}
                            />
                        </List>
                    </Box>
                    <Box m={4}>
                        <List className="bg-white rounded-lg">
                            <div className="px-4 pt-4 pb-2 text-[18px] leading-[1] font-medium">Đăng nhập</div>
                            <Item
                                onClick={() => loginWithZalo()}
                                title="Với zalo"
                                prefix={<img src={images.zalo} width={30} />}
                                suffix={<Icon fontSize={20} icon="formkit:right" />}
                            />
                            <Item
                                onClick={() => navigate('/login')}
                                title="Với tài khoản"
                                prefix={<img src={images.login} width={30} />}
                                suffix={<Icon fontSize={20} icon="formkit:right" />}
                            />
                        </List>
                    </Box>
                    <Box m={4}>
                        <List className="bg-white rounded-lg">
                            <div className="px-4 pt-4 pb-2 text-[18px] leading-[1] font-medium">Đăng ký</div>
                            <Item
                                onClick={() => navigate('/register')}
                                title="Đăng ký tài khoản mới"
                                prefix={<img src={images.login} width={30} />}
                                suffix={<Icon fontSize={20} icon="formkit:right" />}
                            />
                        </List>
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}

export default AccountPage