import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


interface IImageData {
  download_url: string;
}

declare type IImageListResponse = IImageData[];

@Injectable()
export class PictureApiService {
  // public readonly DEFAULT_IMAGE_WIDTH = 320;
  // public readonly DEFAULT_IMAGE_HEIGHT = 240;
  public readonly baseApiUrl: string = 'https://picsum.photos';

  constructor(private readonly httpClient: HttpClient) {}
  
  

  public getImage(width: number = 320, height: number = 240): Observable<unknown> {
    return this.httpClient.get(`${this.baseApiUrl}/${width}/${height}`).pipe(map(data => { console.log(data); return data }));
  }
  
  public getRandomImageList(width: number = 320, height: number = 240, limit: number = 10, pageNumber?: number): Observable<string[]> {
    const page = typeof pageNumber !== 'number' ? Math.round( Math.random() * 100 ) : pageNumber;

    return this.httpClient.get<IImageListResponse>(`${this.baseApiUrl}/v2/list`, { params: { page, limit } })
      .pipe(map(
        images => images.map(({ download_url }) => this.customImageSizeUrlparser(download_url, width, height)))
      )
  }
  
  private customImageSizeUrlparser(url: string, width: number, height: number): string {
    const urlSegments = url.split('/');
    
    return [
      ...urlSegments.slice(0, urlSegments.length - 2),
      width,
      height
    ].join('/');
  }
}
