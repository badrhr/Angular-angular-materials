package org.xproce.clientmanager.web;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.xproce.clientmanager.dao.entities.Client;
import org.xproce.clientmanager.dao.repositories.ClientRepository;
import org.xproce.clientmanager.service.CLientManager;
import org.xproce.clientmanager.service.dtos.CLientDTOADD;
import org.xproce.clientmanager.service.dtos.ClientDTO;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class CLientRest {

    CLientManager cLientManager;

    @GetMapping("client/{code}")
    public ClientDTO getClient(@PathVariable Integer code){
        return cLientManager.getClient(code);
    }

    @GetMapping("clients")
    public List<ClientDTO> getClients(){
        return  cLientManager.getClients();
    }


    @PostMapping("clients")
    public ClientDTO addClient(@ModelAttribute CLientDTOADD cLientDTOADD){
        System.out.println(cLientDTOADD);
        return  cLientManager.addClient(cLientDTOADD);
    }

}
