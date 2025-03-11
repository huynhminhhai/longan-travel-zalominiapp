import { LoginForm, RegisterForm } from "components/account"
import { HeaderSub } from "components/header-sub"
import React from "react"
import { Box, Page } from "zmp-ui"

const RegisterPage: React.FC = () => {
    return (
        <Page className="relative flex-1 flex flex-col bg-white login-page register">
            <Box>
                <HeaderSub title="Đăng ký" />
                <Box>
                    <img
                        className="h-[260px] w-full object-cover"
                        style={{
                            clipPath: 'ellipse(120% 100% at 30% 0%)'
                        }}
                        src={'https://ik.imagekit.io/tvlk/blog/2022/12/dia-diem-du-lich-long-an-3.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2'}
                        alt="Đăng ký"
                    />
                </Box>
                <Box p={4} mt={6}>
                    <Box>
                        <h3 className="text-[24px] font-bold text-[#355933] text-center">Chào Mừng Trở Lại</h3>
                        <h4 className="text-[16px] font-normal text-[#8f8f8f] text-center mt-3">Đăng ký tài khoản để khám phá du lịch Long An</h4>
                    </Box>
                    <Box py={4}>
                        <RegisterForm />
                    </Box>
                </Box>

            </Box>
        </Page>
    )
}

export default RegisterPage