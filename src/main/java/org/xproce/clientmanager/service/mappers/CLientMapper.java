package org.xproce.clientmanager.service.mappers;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import org.xproce.clientmanager.dao.entities.Client;
import org.xproce.clientmanager.service.dtos.CLientDTOADD;
import org.xproce.clientmanager.service.dtos.ClientDTO;

@Component
public class CLientMapper {

    ModelMapper modelMapper =  new ModelMapper();

    public ClientDTO fromCLientToCLientDTO(Client client){
        return modelMapper.map(client, ClientDTO.class);
    }

    public Client fromCLientDTOToCLient(ClientDTO clientDTO){
        return modelMapper.map(clientDTO, Client.class);
    }

    public Client fromCLientDTOADDToCLient(CLientDTOADD cLientDTOADD){
        return modelMapper.map(cLientDTOADD, Client.class);
    }
}
