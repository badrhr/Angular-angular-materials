package org.xproce.clientmanager.dao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.xproce.clientmanager.dao.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Integer> {

}
