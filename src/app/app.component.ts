import { Component, ViewEncapsulation } from '@angular/core';
import { products } from './products';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'my-app',
  styles: [`
    @font-face {
      font-family: "DejaVu Sans";
      src: url("https://kendo.cdn.telerik.com/2017.1.223/styles/fonts/DejaVu/DejaVuSans.ttf") format("truetype");
    }
    @font-face {
      font-family: "DejaVu Sans";
      font-weight: bold;
      src: url("https://kendo.cdn.telerik.com/2017.1.223/styles/fonts/DejaVu/DejaVuSans-Bold.ttf") format("truetype");
    }
    @font-face {
      font-family: "DejaVu Sans";
      font-style: italic;
      src: url("https://kendo.cdn.telerik.com/2017.1.223/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf") format("truetype");
    }
    @font-face {
      font-family: "DejaVu Sans";
      font-weight: bold;
      font-style: italic;
      src: url("https://kendo.cdn.telerik.com/2017.1.223/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf") format("truetype");
    }

    .k-grid {
         font-family: "DejaVu Sans", "Arial", sans-serif;
    }

    .page-template {
      font-family: "DejaVu Sans", "Arial", sans-serif;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .page-template .header {
      position: absolute;
      top: 30px;
      left: 30px;
      right: 30px;
      border-bottom: 1px solid #888;
      color: #888;
    }

    .page-template .footer {
      position: absolute;
      bottom: 30px;
      left: 30px;
      right: 30px;
      border-top: 1px solid #888;
      text-align: center;
      color: #888;
    }
  `],
  styleUrls: [
    // load the Kendo UI Default theme
    'node_modules/@progress/kendo-theme-default/dist/all.css'
  ],
  template: `
    <kendo-grid [kendoGridBinding]="products" [pageable]="true" [pageSize]="10" [height]="490">
        <ng-template kendoGridToolbarTemplate>
            <button kendoGridPDFCommand><span class='k-icon k-i-file-pdf'></span>Export to PDF</button>
        </ng-template>
        <kendo-grid-column field="ProductID" title="ID" width="40">
        </kendo-grid-column>
        <kendo-grid-column field="ProductName" title="Name" width="250">
        </kendo-grid-column>
        <kendo-grid-column field="Category.CategoryName" title="Category">
        </kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Price" width="80">
        </kendo-grid-column>
        <kendo-grid-column field="UnitsInStock" title="In stock" width="80">
        </kendo-grid-column>
        <kendo-grid-column field="Discontinued" title="Discontinued" width="120">
            <ng-template kendoGridCellTemplate let-dataItem>
                <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
            </ng-template>
        </kendo-grid-column>
        <kendo-grid-pdf fileName="Products.pdf" [allPages]="true" paperSize="A4" [repeatHeaders]="true" [landscape]="true">
            <kendo-grid-pdf-margin top="2cm" left="1cm" right="1cm" bottom="2cm"></kendo-grid-pdf-margin>
            <ng-template kendoGridPDFTemplate let-pageNum="pageNum" let-totalPages="totalPages">
             <div class="page-template">
                <div class="header">
                  <div style="float: right">Page {{ pageNum }} of {{ totalPages }}</div>
                  Multi-page grid with automatic page breaking
                </div>
                <div class="footer">
                  Page {{ pageNum }} of {{ totalPages }}
                </div>
              </div>
            </ng-template>
        </kendo-grid-pdf>
    </kendo-grid>
  `,
})
export class AppComponent  {
  public name: string;
  public products: any[] = products;

  onButtonClick() {
    this.name = 'Kendo UI';
  }
}
