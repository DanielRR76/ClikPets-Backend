import { Pet } from '@domain/Pet';
import { UserResponseDTO } from './UserResponseDTO';
import { User } from '@domain/User';

export class PetResponseDTO {
    readonly id: number;
    readonly name: string;
    readonly age: number;
    readonly weight: number;
    readonly color: string;
    readonly images: string[];
    readonly available: boolean;
    readonly adopterId?: number;
    readonly owner?: UserResponseDTO;

    constructor(pet: Pet, owner?: User) {
        this.id = pet.getId()!;
        this.name = pet.getName();
        this.age = pet.getAge().getValue();
        this.weight = pet.getWeight().getValue();
        this.color = pet.getColor().getValue();
        this.images = pet.getImages().map((file) => file.getUrl());
        this.available = pet.getAvailable();
        this.adopterId = pet.getAdopterId() || undefined;
        this.owner = owner
            ? new UserResponseDTO(
                  owner.getName(),
                  owner.getEmail().getValue(),
                  owner.getPhone().getValue(),
                  owner.getImage()?.getUrl(),
                  owner.getId(),
              )
            : undefined;
    }
}
