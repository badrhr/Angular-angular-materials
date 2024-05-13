package org.xproce.clientmanager.service;

import lombok.AllArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;
import org.xproce.clientmanager.dao.entities.Client;
import org.xproce.clientmanager.dao.repositories.ClientRepository;
import org.xproce.clientmanager.service.dtos.CLientDTOADD;
import org.xproce.clientmanager.service.dtos.ClientDTO;
import org.xproce.clientmanager.service.mappers.CLientMapper;

import java.util.ArrayList;
import java.util.List;
@Service
@AllArgsConstructor
public class ClientService implements CLientManager{

    ClientRepository clientRepository;
    CLientMapper cLientMapper ;
    @Override
    public ClientDTO getClient(Integer code) {
//        Client client = clientRepository.findById(code).get();
//        ClientDTO clientDTO = cLientMapper.fromCLientToCLientDTO(client);
//        return clientDTO ;

        return cLientMapper.fromCLientToCLientDTO(clientRepository.findById(code).get());

    }

    @Override
    public List<ClientDTO> getClients() {

        List<Client> clients = clientRepository.findAll();
        List<ClientDTO> clientDTOS = new ArrayList<>();
        for (Client client: clients){
            ClientDTO clientDTO = cLientMapper.fromCLientToCLientDTO(client);
            clientDTOS.add(clientDTO);
        }
        return clientDTOS;
    }

    @Override
    public ClientDTO addClient(CLientDTOADD cLientDTOADD) {
        Client client = cLientMapper.fromCLientDTOADDToCLient(cLientDTOADD);
        client = clientRepository.save(client);
        return cLientMapper.fromCLientToCLientDTO(client);
    }
}
