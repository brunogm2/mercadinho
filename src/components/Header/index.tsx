import React from "react";
import { Container, SelectProfile, Primary, Secondary, 
         ProfileConfiguration, Profile, Settings, DashboardPrincipal, DashboardSecondary,
         GearHeader, ImgUser, NameUser } from "./style";

function Header() {
    
    return(
        <>
            <Container>
                <SelectProfile>
                    <Primary>
                       <p style={{fontWeight: 'bold', color: '#CFA17E'}}>Principal</p> 
                       <p>|</p> 
                       <p>Secundario</p>
                    </Primary>
                    <Secondary>

                    </Secondary>
                </SelectProfile>
                <ProfileConfiguration>
                    <Profile>
                            <ImgUser/>
                            <NameUser>
                                Admin
                            </NameUser>
                    </Profile>
                    <Settings>
                        <GearHeader/>
                    </Settings>
                </ProfileConfiguration>
            </Container>
        </>
    )
}

export default Header;