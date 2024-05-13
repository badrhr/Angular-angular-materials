package org.xproce.clientmanager.service.dtos;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CLientDTOADD {
    
    private String name;
    private String email;
    private String password;
    private String adresse ;
}
