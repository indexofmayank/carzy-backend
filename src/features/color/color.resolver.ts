import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { Color } from './schemas/color.schema';
import { ColorsService } from './services/color.service';
import { CreateColorDto } from './inputs/create.color.dto';
import { UpdateColorDto } from './inputs/update.color.dto';
import { ColorIdDto } from './inputs/color.id.dto';
import { UpdateColorStatusDto } from './inputs/update.color.status.dto';

@Resolver()
export class ColorsResolver {
  constructor(private readonly colorService: ColorsService) {}

  @Query(() => [Color], { name: 'listColors', nullable: true })
  list(): Promise<Color[]> {
    return this.colorService.getColors(10, 1);
  }

  @Query(() => Color, {name: 'getColorDetail', nullable: true})
  getColorDetail(@Args('colorIdDto') colorIdDto: ColorIdDto): Promise<Color | any>{
    return this.colorService.getColorById(colorIdDto.colorId)
  }

  @Mutation(() => Color, { name: 'addColor', nullable: true })
  addColor(@Args('addColorDto') addColorDto: CreateColorDto): Promise<Color> {
    return this.colorService.createColor(addColorDto);
  }

  @Mutation(() => Color, { name: 'deleteColor', nullable: true })
  deleteColor(
    @Args('colorIdDto') colorIdDto: ColorIdDto
  ): Promise<string> {
    return this.colorService.deleteColor(colorIdDto);
  }

  @Mutation(() => [Color], { name: 'deleteManyColor' })
  deleteManyColor(
    @Args('colorIdDto') colorIdDto: ColorIdDto
  ): Promise<boolean> {
    return this.colorService.deleteManyColor(colorIdDto);
  }

  @Mutation(() => Color, { name: 'updateColor' })
  updateColor(
   @Args('updateColorDto') updateColorDto: UpdateColorDto
  ): Promise<Color> {
    return this.colorService.updateColor(updateColorDto);
  }

  @Mutation(() => Color, {name: 'updateColorStatus'})
  updateColorStatus(
    @Args('updateColorStatusDto') updateColorStatusDto: UpdateColorStatusDto
  ): Promise<Color | any > {
    return this.colorService.updateColorStatus(updateColorStatusDto)
  }
}
