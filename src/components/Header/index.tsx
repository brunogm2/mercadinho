import React from "react";
import { Container, SelectProfile, Primary, Secondary, 
         ProfileConfiguration, Profile, Settings, DashboardPrincipal, DashboardSecondary } from "./style";

function Header() {
    
    return(
        <>
            <Container>
                <SelectProfile>
                    <Primary>
                        <DashboardPrincipal>
                            <h1>Principal |</h1>
                        </DashboardPrincipal>
                        
                        <DashboardSecondary>
                            <h1>Secundario</h1>
                        </DashboardSecondary>
                    </Primary>
                    <Secondary>

                    </Secondary>
                </SelectProfile>
                <ProfileConfiguration>
                    <Profile>

                    </Profile>
                    <Settings>

                    </Settings>
                </ProfileConfiguration>
            </Container>
        </>
    )
}

export default Header;