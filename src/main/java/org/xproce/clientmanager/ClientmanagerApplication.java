package org.xproce.clientmanager;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.xproce.clientmanager.dao.entities.Client;
import org.xproce.clientmanager.dao.repositories.ClientRepository;

import java.util.List;

@SpringBootApplication
public class ClientmanagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClientmanagerApplication.class, args);
    }


    @Bean
    public CommandLineRunner start(ClientRepository clientRepository){
        return args -> {
            clientRepository.saveAll(
                    List.of(
                            new Client(null, "x","x@gmail.com","6f46f4ew","Casa"),
                            new Client(null, "y","y@gmail.com","3gdf4g68r4g6","Rabat"),
                            new Client(null, "z","z@gmail.com","fg6444t64sd4f","Fes"),
                            new Client(null, "w","w@gmail.com","sdf649r84r","Oujda"),
                            new Client(null, "f","f@gmail.com","df64sd","Kech")
                    )
            );
        };
    }
}
