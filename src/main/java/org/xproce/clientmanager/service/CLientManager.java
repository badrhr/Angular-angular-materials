package org.xproce.clientmanager.service;

import org.xproce.clientmanager.service.dtos.CLientDTOADD;
import org.xproce.clientmanager.service.dtos.ClientDTO;

import java.util.List;

public interface CLientManager {

    public ClientDTO getClient(Integer code);
    public List<ClientDTO> getClients();
    public ClientDTO addClient(CLientDTOADD cLientDTOADD);
}
