import { Component } from '@angular/core';

export interface TreeNode {
  // Node
  children: TreeNode[];
  hideChildren?: boolean;
  onClick?: () => void;
  // CSS (used for custom styling of individual nodes)
  cssClass?: string;
  css?: string;
}

// make your own interface that extends TreeNode
interface MyTreeNode extends TreeNode {
  name: string;
  description?: string;
  image?: string;
  children: MyTreeNode[];
}

@Component({
  selector: 'admin-portal-organization-chart',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.scss'],
})
export class OrganizationChartComponent {
  isToggleZoom = true;
  tree: MyTreeNode = {
    name: 'Tập đoàn Danh Khôi',
    description: 'Tập đoàn bất động sản hàng đầu Việt Nam',
    image: 'https://picsum.photos/40',
    onClick: () => alert('Death to dogs'),
    children: [
      {
        name: 'Danh Khôi Miền Bắc',
        description: 'Cơ sở ở Miền Bắc',
        image: 'https://picsum.photos/40',
        children: [],
      },
      {
        name: 'Danh Khôi Miền Trung',
        description: 'Cơ sở ở Miền Trung',
        image: 'https://picsum.photos/40',
        children: [],
      },
      {
        name: 'Danh Khôi Miền Nam',
        description: 'Cơ sở ở Miền Nam',
        image: 'https://picsum.photos/40',
        children: [
          {
            name: 'DKRH',
            image: 'https://picsum.photos/40',
            children: [],
          },
          {
            name: 'DKG',
            description: 'Hội sở chính',
            image: 'https://picsum.photos/40',
            children: [
              {
                name: 'Ngô Đình Nghĩa',
                description: 'Giám đốc Khối Công Nghệ',
                image: 'https://picsum.photos/40',
                children: [
                  {
                    name: 'Trang Ngọc Hải',
                    description: 'TBP Phát triển ứng dụng',
                    image: 'https://picsum.photos/40',
                    children: [
                      {
                        name: 'Phạm Văn Hùng',
                        image: 'https://picsum.photos/40',
                        description: 'CV Phát triển ứng dụng',
                        children: [],
                      },
                      {
                        name: 'Phùng Chí Tài',
                        image: 'https://picsum.photos/40',
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'DKPM',
            image: 'https://picsum.photos/40',
            children: [],
          },
          {
            name: 'Cotec Asia',
            image: 'https://picsum.photos/40',
            children: [],
          },
        ],
      },
    ],
  };

  toggleZoom(exampleChart: any) {
    exampleChart.toggleZoom();
    this.isToggleZoom = !this.isToggleZoom;
  }
}
